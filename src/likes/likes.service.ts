import { Injectable } from '@nestjs/common';
import { Likes } from 'src/likes/model/likes.model';
import { PrismaService } from '../common/modules/prisma/prisma.service';
import { LikeInput } from './inputs/like.input';
import { Prisma } from 'generated/prisma';

@Injectable()
export class LikesService {
  constructor(private readonly prisma: PrismaService) {}
  async likedProduct(input: LikeInput, user_id: string): Promise<Likes | []> {
    const { productId } = input;
    return await this.prisma.likes.create({
      data: {
        productId,
        user_id,
      },
    });
  }

  async getLastLikeByProductId(productId: string) {
    const query: Prisma.LikesWhereInput = {
      productId,
      user: {
        orders: {
          none: {
            orderDetails: {
              some: {
                variants: {
                  product_id: productId,
                },
              },
            },
          },
        },
      },
    };
    const lastLike = await this.prisma.likes.findFirst({
      where: query,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        user: true,
        products: {
          include: {
            variants: {
              include: {
                file: true,
              },
            },
            brand: true,
          },
        },
      },
    });

    return lastLike;
  }
}
