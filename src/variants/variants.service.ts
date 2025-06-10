import { Injectable, Logger } from '@nestjs/common';
import { Variants } from 'generated/prisma';
import { VariantWithProductInfo } from '../common/dtos/Variants.dto';
import { PrismaService } from '../common/modules/prisma/prisma.service';
import { UpdateVariantsStockDto } from './dto/variantUpdateStock.dto';

@Injectable()
export class VariantsService {
  logger: Logger;
  constructor(private prisma: PrismaService) {
    this.logger = new Logger();
  }

  async getVariantWithProductInfo(
    variantId: string,
  ): Promise<VariantWithProductInfo | null> {
    const variantWithProductInfo: VariantWithProductInfo =
      await this.prisma.variants.findUnique({
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
    return variantWithProductInfo;
  }

  async getVariantsByProductId(productId: string) {
    return this.prisma.variants.findMany({
      where: {
        product_id: productId,
      },
    });
  }

  async getVariantsByProductIdLoader(
    productIds: string[],
  ): Promise<Variants[]> {
    return this.prisma.variants.findMany({
      where: {
        product: {
          id: {
            in: productIds,
          },
        },
      },
    });
  }

  async getVariantsProductsByBatch(
    productIds: string[],
  ): Promise<Variants[][]> {
    const variants = await this.getVariantsByProductIdLoader(productIds);

    const mappedResults = this._mapResultToIds(productIds, variants);
    this.logger.debug(mappedResults, 'Vaiatnstad OUput');
    return mappedResults;
  }

  async getVariantsWithStockThree(productId: string) {
    const variants = await this.prisma.variants.findMany({
      where: {
        product_id: productId,
        stock: 3,
      },
      include: {
        product: true,
        file: true,
      },
    });

    return variants;
  }

  async updateVariantsStock(input: UpdateVariantsStockDto[]) {
    if (!input || !Array.isArray(input)) {
      throw new Error('Input must be an array of UpdateVariantsStockDto');
    }
    await Promise.allSettled(
      input.map(async (item) => {
        await this.prisma.variants.update({
          where: {
            id: item.variants.id,
          },
          data: {
            stock: item.variants.stock - item.quantity,
          },
        });
      }),
    );
  }

  _mapResultToIds(productIds: string[], variants: Variants[]): Variants[][] {
    return productIds.map((id) =>
      variants.filter((variant: Variants) => variant.product_id === id),
    );
  }
}
