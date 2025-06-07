import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../common/modules/prisma/prisma.service';
import { VariantsService } from './variants.service';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { Size, TextColor, Variants } from '../../generated/prisma';

describe('VariantService', () => {
  let service: VariantsService;
  let mockPrismaService: DeepMockProxy<PrismaService>;
  //   const mockVariantsService = {
  //     getVariantsByProductIdLoader: jest.fn(),
  //     _mapResultToIds: jest.fn(),
  //   };
  beforeEach(async () => {
    mockPrismaService = mockDeep<PrismaService>();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VariantsService,
        { provide: PrismaService, useValue: mockPrismaService },
        // { provide: VariantsService, useValue: mockVariantsService },
      ],
    }).compile();

    service = module.get<VariantsService>(VariantsService);
    mockPrismaService.productCategories.findMany.mockClear();
  });

  const variantArray = [
    {
      id: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
      product_id: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
      file_id: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
      size: Size.MEDIUM,
      textColor: TextColor.BLUE,
      rgb: '#FFFF',
      stock: 23,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  const productIds = [
    '0f5c8172-2c13-79i9-b47b-6d0111d307d1',
    '0f5c8172-2c13-89i9-b47b-6d0111d307d1',
  ];

  const variantsBatchResult = [
    {
      id: '7930c597-29d1-4077-bcb9-e1d7a347b679',
      product_id: '16686134-d385-45bf-aa3a-a5ce3d7fae72',
      file_id: '38485ebe-5d67-47c0-9fc9-f2d3d4b91dde',
      size: 'SMALL',
      textColor: 'BLUE',
      rgb: '000000',
      stock: 10,
      createdAt: new Date('2023-01-15T09:00:00.000Z'),
      updatedAt: new Date('2023-01-15T09:00:00.000Z'),
    },
    {
      id: '876537ec-21fe-470f-9b24-c68278730556',
      product_id: '16686134-d385-45bf-aa3a-a5ce3d7fae72',
      file_id: '38485ebe-5d67-47c0-9fc9-f2d3d4b91dde',
      size: 'LARGE',
      textColor: 'BLUE',
      rgb: '000000',
      stock: 12,
      createdAt: new Date('2023-01-15T09:00:00.000Z'),
      updatedAt: new Date('2023-01-15T09:00:00.000Z'),
    },
  ];
  //   const mapResultsData: Variants[] = [
  //     {
  //       id: '7930c597-29d1-4077-bcb9-e1d7a347b679',
  //       product_id: '16686134-d385-45bf-aa3a-a5ce3d7fae72',
  //       file_id: '38485ebe-5d67-47c0-9fc9-f2d3d4b91dde',
  //       size: 'SMALL',
  //       textColor: 'BLUE',
  //       rgb: '000000',
  //       stock: 10,
  //       createdAt: new Date('2023-01-15T09:00:00.000Z'),
  //       updatedAt: new Date('2023-01-15T09:00:00.000Z'),
  //     },

  //     {
  //       id: '876537ec-21fe-470f-9b24-c68278730556',
  //       product_id: '16686134-d385-45bf-aa3a-a5ce3d7fae72',
  //       file_id: '38485ebe-5d67-47c0-9fc9-f2d3d4b91dde',
  //       size: 'LARGE',
  //       textColor: 'BLUE',
  //       rgb: '000000',
  //       stock: 12,
  //       createdAt: new Date('2023-01-15T09:00:00.000Z'),
  //       updatedAt: new Date('2023-01-15T09:00:00.000Z'),
  //     },
  //   ];
  const mappedResults: {
    id: string;
    product_id: string;
    file_id: string;
    size: 'S' | 'M' | 'L' | 'XL'; // Adjust based on your $Enums.Size
    textColor: 'black' | 'white' | 'red' | 'blue'; // Adjust based on your $Enums.TextColor
    rgb: string;
    stock: number;
    createdAt: Date;
    updatedAt: Date;
  }[][] = [
    [
      // First group (array)
      {
        id: '1',
        product_id: 'prod_001',
        file_id: 'file_001',
        size: 'S',
        textColor: 'black',
        rgb: 'rgb(0, 0, 0)',
        stock: 15,
        createdAt: new Date('2023-10-01'),
        updatedAt: new Date('2023-10-05'),
      },
      {
        id: '2',
        product_id: 'prod_002',
        file_id: 'file_002',
        size: 'M',
        textColor: 'white',
        rgb: 'rgb(255, 255, 255)',
        stock: 20,
        createdAt: new Date('2023-10-02'),
        updatedAt: new Date('2023-10-06'),
      },
    ],
    [
      // Second group (array)
      {
        id: '3',
        product_id: 'prod_003',
        file_id: 'file_003',
        size: 'L',
        textColor: 'red',
        rgb: 'rgb(255, 0, 0)',
        stock: 8,
        createdAt: new Date('2023-10-03'),
        updatedAt: new Date('2023-10-07'),
      },
      {
        id: '4',
        product_id: 'prod_004',
        file_id: 'file_004',
        size: 'XL',
        textColor: 'blue',
        rgb: 'rgb(0, 0, 255)',
        stock: 12,
        createdAt: new Date('2023-10-04'),
        updatedAt: new Date('2023-10-08'),
      },
    ],
  ];
  it('should Be defined', () => {
    expect(service).toBeDefined();
    expect(mockPrismaService).toBeDefined();
  });

  describe('variantsWithProductInfo', () => {
    it('Should be called with arguments', async () => {
      const variant = {
        id: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
        product_id: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
        file_id: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
        size: Size.MEDIUM,
        textColor: TextColor.BLUE,
        rgb: '#FFFF',
        stock: 23,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const variantWithProductInfo = {
        product_id: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
        product: {
          name: 'sunflower',
          price: 32.32,
          active: true,
        },
      };

      const variantId = '0f5c8172-2c13-43c7-b47b-6d0111d307d1';

      mockPrismaService.variants.findUnique.mockResolvedValueOnce(variant);

      const result = await service.getVariantWithProductInfo(variantId);

      expect(result).toEqual(variant);

      expect(mockPrismaService.variants.findUnique).toHaveBeenCalledWith({
        where: {
          id: variantId,
        },
        select: {
          product_id: true,
          product: {
            select: {
              name: true,
              price: true,
              active: true,
            },
          },
        },
      });
    });
  });

  describe('getVariantsByProductId', () => {
    it('should be call with an variant array', async () => {
      mockPrismaService.variants.findMany.mockResolvedValueOnce(variantArray);
      //Act
      const result = await service.getVariantsByProductId(productIds[0]);
      //Asserts
      expect(result).toEqual(variantArray);
    });
  });
  describe('getVariantsByProductIdLoader', () => {
    it('', async () => {
      mockPrismaService.variants.findMany.mockResolvedValueOnce(variantArray);

      const result = await service.getVariantsByProductIdLoader(productIds);

      expect(result).toEqual(variantArray);
    });
  });
  describe('getVariantsProductsByBatch', () => {
    // it('Should return map results', async () => {
    //   jest
    //     .spyOn(service, 'getVariantsByProductIdLoader')
    //     .mockResolvedValueOnce(variantArray);
    //   const result = await service.getVariantsProductsByBatch(productIds);
    //   expect(result).toEqual(variantArray);
    // });
  });
});
