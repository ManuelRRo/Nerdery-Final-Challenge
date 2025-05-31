import { Injectable } from '@nestjs/common';
import { Likes } from 'src/likes/model/likes.model';
import { PrismaService } from 'src/common/modules/prisma/prisma.service';
import { LikeInput } from './inputs/like.input';

@Injectable()
export class LikesService {
  constructor(private readonly prisma: PrismaService) {}
  async likedProduct(input: LikeInput, user_id: string): Promise<Likes | []> {
    // need validate if register already exsit
    const { productId } = input;
    return await this.prisma.likes.create({
      data: {
        productId,
        user_id,
      },
    });
  }
}
