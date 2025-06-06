import { Test, TestingModule } from '@nestjs/testing';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { PrismaService } from '../common/modules/prisma/prisma.service';
import { PaginationService } from '../common/modules/pagination/pagination.service';
import { ProductsService } from './products.service';
import { Prisma, Size, TextColor } from '../../generated/prisma';
import { PaginationArgs } from '../common/args/pagination.args';
import { ProductInput } from './inputs/create-product.input';
import { Patch } from '@nestjs/common';

describe('Products Service', () => {
  let mockPrismaService: DeepMockProxy<PrismaService>;
  let mockPaginationService: DeepMockProxy<PaginationService>;
  let service: ProductsService;
  beforeEach(async () => {
    mockPrismaService = mockDeep<PrismaService>();
    mockPaginationService = mockDeep<PaginationService>();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        { provide: PrismaService, useValue: mockPrismaService },
        {
          provide: PaginationService,
          useValue: mockPaginationService,
        },
      ],
    }).compile();
    service = module.get<ProductsService>(ProductsService);
    mockPrismaService.productCategories.deleteMany.mockClear();
  });
  it('should Be defined', () => {
    expect(mockPrismaService).toBeDefined();
    expect(mockPaginationService).toBeDefined();
    expect(service);
  });

  describe('product', () => {
    it('', async () => {
      //Arrange
      const product = {
        name: 'sunflower',
        id: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
        price: 25,
        created_at: new Date(),
        updated_at: new Date(),
        active: true,
        brand_id: '0f5c8172-2c13-43c7-c23o-6d0111d307d1',
      };
      mockPrismaService.products.findFirst.mockResolvedValueOnce(product);
      //Act
      const result = await service.product(
        '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
      );
      //Asset

      expect(result).toEqual(product);
      expect(mockPrismaService.products.findFirst).toHaveBeenCalledWith({
        where: {
          id: product.id,
        },
      });
    });
  });
  describe('products', () => {
    it('Should return products if exist', async () => {
      const products = [
        {
          name: 'sunflower',
          id: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
          price: 25,
          created_at: new Date(),
          updated_at: new Date(),
          active: true,
          brand_id: '0f5c8172-2c13-43c7-c23o-6d0111d307d1',
        },
        {
          name: 'sunflower 23',
          id: '0f5c8172-2c13-43c7-b12b-6d0111d307d1',
          price: 25,
          created_at: new Date(),
          updated_at: new Date(),
          active: true,
          brand_id: '0f5c8172-2123-43c7-c23o-6d0111d307d1',
        },
      ];
      const getProductQuery = {
        offset: 0,
        limit: 2,
        brand_id: '0f5c8172-2123-43c7-c23o-6d0111d307d1',
        parentCategory: '70743a51-e47d-49cd-a058-2ab9d9509329',
        categoryId: '70743a51-e47d-49cd-a058-2ab23de09329',
        size: undefined,
        textColor: undefined,
      };
      const filterQuery: Prisma.ProductsWhereInput = {
        AND: [
          // Filter by brand if provided
          getProductQuery.brand_id
            ? { brand_id: getProductQuery.brand_id }
            : {},

          // Filter by variants if provided
          getProductQuery.size || getProductQuery.textColor
            ? {
                variants: {
                  some: {
                    AND: [
                      getProductQuery.size && getProductQuery.size !== Size.NONE
                        ? { size: getProductQuery.size }
                        : {},
                      getProductQuery.textColor &&
                      getProductQuery.textColor !== TextColor.NONE
                        ? { textColor: getProductQuery.textColor }
                        : {},
                    ].filter((condition) => Object.keys(condition).length > 0),
                  },
                },
              }
            : {},

          // Filter by category if provided
          getProductQuery.categoryId || getProductQuery.parentCategory
            ? {
                productCategories: {
                  some: {
                    AND: [
                      getProductQuery.categoryId
                        ? { categoryId: getProductQuery.categoryId }
                        : {},
                      getProductQuery.parentCategory
                        ? {
                            categories: {
                              parentId: getProductQuery.parentCategory,
                            },
                          }
                        : {},
                    ].filter((condition) => Object.keys(condition).length > 0),
                  },
                },
              }
            : {},
        ].filter((condition) => Object.keys(condition).length > 0),
      };
      const meta = {
        meta: {
          currentPage: 0,
          itemsPerPage: 1,
          totalItems: 16,
          totalPages: 2,
        },
      };
      //Arange
      mockPrismaService.products.findMany.mockResolvedValueOnce(products);
      mockPaginationService.paginateQuery.mockResolvedValueOnce(meta);

      //Act
      await service.products(getProductQuery);

      //Asset
      expect(mockPrismaService.products.findMany).toHaveBeenCalledWith({
        skip: getProductQuery.offset,
        take: getProductQuery.limit,
        where: filterQuery,
        include: {
          brand: true,
          variants: true,
          productCategories: {
            include: {
              categories: true,
            },
          },
        },
      });
    });
  });
  describe('getProductsByBrandId', () => {
    it('should get a list of products by Brand id', async () => {
      //Arrange
      const products = [
        {
          name: 'sunflower',
          id: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
          price: 25,
          created_at: new Date(),
          updated_at: new Date(),
          active: true,
          brand_id: '0f5c8172-2c13-43c7-c23o-6d0111d307d1',
        },
        {
          name: 'sunflower 23',
          id: '0f5c8172-2c13-43c7-b12b-6d0111d307d1',
          price: 25,
          created_at: new Date(),
          updated_at: new Date(),
          active: true,
          brand_id: '0f5c8172-2123-43c7-c23o-6d0111d307d1',
        },
      ];
      const paginationArgs: PaginationArgs = {
        offset: 0,
        limit: 5,
      };
      const brand_id = '0f5c8172-2123-43c7-c23o-6d0111d307d1';
      mockPrismaService.products.findMany.mockResolvedValueOnce(products);

      //Act
      const result = await service.getProductsByBrandId(
        brand_id,
        paginationArgs,
      );
      //Assets
      expect(mockPrismaService.products.findMany).toHaveBeenCalledWith({
        skip: 0,
        take: 5,
        where: {
          brand_id,
        },
      });
    });
  });
  describe('createProduct', () => {
    it('should be call with', async () => {
      //Arrange
      const input: ProductInput = {
        brand_id: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
        name: 'sunflower',
        price: 123.12,
        categoryId: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
      };
      const returnProduct = {
        name: 'sunflower',
        id: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
        price: 25,
        created_at: new Date(),
        updated_at: new Date(),
        active: true,
        brand_id: '0f5c8172-2c13-43c7-c23o-6d0111d307d1',
      };
      mockPrismaService.products.create.mockResolvedValueOnce(returnProduct);
      //Act
      await service.createProduct(input);
      //Asserts
      expect(mockPrismaService.products.create).toHaveBeenCalledWith({
        data: {
          brand_id: input.brand_id,
          name: input.name,
          price: input.price,
          productCategories: {
            create: {
              categoryId: input.categoryId,
            },
          },
        },
        include: {
          productCategories: {
            include: {
              categories: true,
            },
          },
          brand: true,
        },
      });
    });
  });
  describe('updateProduct', () => {
    it('update should be call with', async () => {
      //Arrange
      const updateProduct = {
        name: 'sunflower',
        id: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
        price: 25,
        created_at: new Date(),
        updated_at: new Date(),
        active: true,
        brand_id: '0f5c8172-2c13-43c7-c23o-6d0111d307d1',
      };
      const input = {
        id: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
        patch: {
          brand_id: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
          name: 'Blue shirts',
          price: 1231,
          categoryId: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
        },
      };
      mockPrismaService.products.update.mockResolvedValueOnce(updateProduct);
      //Act
      await service.updateProduct(input);

      //Asserts
      expect(mockPrismaService.products.update).toHaveBeenCalledWith({
        where: {
          id: input.id,
        },
        data: {
          brand_id: input.patch.brand_id,
          name: input.patch.name,
          price: input.patch.price,
          productCategories: {
            connect: input.patch.categoryId
              ? {
                  productId_categoryId: {
                    productId: input.id,
                    categoryId: input.patch.categoryId,
                  },
                }
              : undefined,
          },
        },
      });
    });
  });
  describe('modifiedProductActiveField', () => {});
  describe('deleteProduct', () => {
    it('id should not be empty', async () => {
      //Arrange
      const id = '';
      //Act
      const result = service.deleteProduct(id);
      //Asserts
      await expect(result).rejects.toThrow(Error);
    });
    it('deleted row on productCategroies should exist', async () => {
      //Arrange
      const id = '0f5c8172-2c13-43c7-b478-6d0111d307d1';
      mockPrismaService.productCategories.deleteMany.mockResolvedValueOnce({
        count: 0,
      });
      //Act
      const result = service.deleteProduct(id);
      //Asserts
      await expect(result).rejects.toThrow(Error);
    });
  });
  describe('checkProducStock', () => {
    it('', async () => {
      const product = {
        name: 'sunflower',
        id: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
        price: 25,
        created_at: new Date(),
        updated_at: new Date(),
        active: true,
        brand_id: '0f5c8172-2c13-43c7-c23o-6d0111d307d1',
      };
      const id = '2a21c8172-2c13-43c7-b47b-6d0111d307d1';
      mockPrismaService.products.findUnique.mockResolvedValueOnce(product);
      await service.checkProductStock(id);
      expect(mockPrismaService.products.findUnique).toHaveBeenCalledWith({
        where: { id },
        include: {
          variants: {
            where: { stock: 3 },
            include: { file: true },
          },
          brand: true,
        },
      });
    });
  });
});
