import { Injectable } from '@nestjs/common';
import { Carts } from 'generated/prisma';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CartService {
  constructor(private readonly prisma: PrismaService) {}

  async createCarts(id: string): Promise<Carts> {
    return await this.prisma.carts.create({ data: { user_id: id } });
  }

  async getCartByUserID(user_id: string): Promise<string | undefined> {
    const userCart = await this.prisma.carts.findFirst({
      where: {
        user_id,
      },
    });

    if (!userCart) {
      await this.createCarts(user_id);
    }

    return userCart?.id;
  }
}
