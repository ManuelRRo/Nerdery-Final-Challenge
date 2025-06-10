import { Injectable } from '@nestjs/common';
import { CartDetails, Orders, Prisma } from 'generated/prisma';
import { PaginationArgs } from 'src/common/args/pagination.args';
import { PrismaService } from '../common/modules/prisma/prisma.service';

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
        user_id,
      },
    });
    return orders;
  }

  async createOrder(id: string, cartDetails: CartDetails[]): Promise<Orders> {
    const data: Prisma.OrdersCreateInput = {
      user: {
        connect: { id },
      },
    };

    const order = await this.prisma.orders.create({ data });

    await this.addOrderDetailToOrder(order.id, cartDetails);

    return order;
  }

  async addOrderDetailToOrder(order_id: string, cartDetails: CartDetails[]) {
    const data = cartDetails.map((detail) => {
      const { quantity, price, variant_id } = detail;
      return {
        quantity,
        price,
        variant_id,
        orderDetails_id: order_id,
      };
    });

    await this.prisma.orderDetails.createMany({
      data,
    });
  }

  async getOrderByPaymentIntent(payment_intent: string) {
    const query: Prisma.OrdersWhereInput = {
      payment: {
        payment_intent,
      },
    };

    const include: Prisma.OrdersInclude = {
      payment: true,
      orderDetails: {
        select: {
          id: true,
          variants: {
            select: {
              id: true,
              stock: true,
              product_id: true,
            },
          },
        },
      },
    };
    const order = await this.prisma.orders.findFirst({
      where: query,
      include: include,
    });

    return order;
  }
}
