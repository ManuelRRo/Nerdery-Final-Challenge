import { Injectable, Logger } from '@nestjs/common';
import { Prisma, Products } from 'generated/prisma';
import { PrismaService } from '../common/modules/prisma/prisma.service';
import { ProductInput } from './inputs/create-product.input';
import { Size, TextColor } from '../variants/model/variants.model';
import { PaginationArgs } from '../common/args/pagination.args';
import { ProductActiveInput } from './inputs/changeActiveProduct.input';
import { UpdateProductInput } from './inputs/updateProduct.input';
import { GetProductQueryDto } from './args/getProductQuery.args';
import { PaginationService } from '../common/modules/pagination/pagination.service';
import { Paginated } from '../common/modules/pagination/dtos/paginated.dto';

@Injectable()
export class ProductsService {
  logger: Logger;
  constructor(
    private prisma: PrismaService,
    private readonly paginationModule: PaginationService,
  ) {
    this.logger = new Logger();
  }

  async products(
    getProductQuery: GetProductQueryDto,
  ): Promise<Paginated<Products>> {
    const metadata = await this.paginationModule.paginateQuery(
      getProductQuery,
      this.prisma.products,
    );

    const { meta } = metadata;

    const filterQuery: Prisma.ProductsWhereInput = {
      AND: [
        // Filter by brand if provided
        getProductQuery.brand_id ? { brand_id: getProductQuery.brand_id } : {},

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

    const data = await this.prisma.products.findMany({
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
    meta.itemsPerPage = data.length;
    return {
      data,
      meta,
    };
  }

  async product(productId: string) {
    return this.prisma.products.findFirst({
      where: {
        id: productId,
      },
    });
  }

  async getProductsByBrandId(brandId: string, args: PaginationArgs) {
    return this.prisma.products.findMany({
      skip: args.offset,
      take: args.limit,
      where: {
        brand_id: brandId,
      },
    });
  }

  async createProduct(input: ProductInput) {
    return this.prisma.products.create({
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
  }

  async updateProduct(input: UpdateProductInput) {
    console.log('Product infor update', input);
    return this.prisma.products.update({
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
  }

  async modifiedProductActiveField(input: ProductActiveInput) {
    return this.prisma.products.update({
      where: { id: input.id },
      data: { active: input.active },
    });
  }

  async deleteProduct(id: string) {
    await this.prisma.productCategories.deleteMany({
      where: { productId: id },
    });

    await this.prisma.variants.deleteMany({
      where: { product_id: id },
    });

    await this.prisma.products.delete({ where: { id } });

    return true;
  }

  async checkProductStock(productId: string) {
    const product = await this.prisma.products.findUnique({
      where: { id: productId },
      include: {
        variants: {
          where: { stock: 3 },
          include: { file: true },
        },
        brand: true,
      },
    });
    return product;
  }
}
