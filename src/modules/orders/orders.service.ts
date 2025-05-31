import { Injectable } from '@nestjs/common';
import { Orders, Prisma } from 'generated/prisma';
import { PaginationArgs } from 'src/common/args/pagination.args';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllOrders(paginationArgs: PaginationArgs): Promise<Orders[]> {
    const { offset, limit } = paginationArgs;
    return await this.prisma.orders.findMany({
      skip: offset,
      take: limit,
    });
  }

  async getOrdersByUserId(user_id: string): Promise<Orders[] | []> {
    const orders = await this.prisma.orders.findMany({
      where: {
        user_id, // Replace with actual user ID
      },
    });
    return orders;
  }

  async createOrder(id: string): Promise<Orders> {
    const order: Prisma.OrdersCreateInput = {
      user: {
        connect: { id },
      },
    };

    return await this.prisma.orders.create({ data: order });
  }
}
