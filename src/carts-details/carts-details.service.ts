import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/modules/prisma/prisma.service';
import { CartDetailInput } from './inputs/cart-detail.input';
import { VariantsService } from '../variants/variants.service';
import { CartService } from '../carts/carts.service';
import { CartDetailResponse } from './response/cartDetail.response';
import { CartDetailItem } from './dto/CartDetailItem.dto';

// import { VariantWithProductInfo } from 'src/common/dtos/Variants.dto';

@Injectable()
export class CartsDetailsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly variantService: VariantsService,
    private readonly cartService: CartService,
  ) {}

  async addCartDetail(input: CartDetailInput, user_id: string) {
    const cart_id = await this.cartService.getCartByUserID(user_id);
    const productInfo = await this.variantService.getVariantWithProductInfo(
      input.variant_id,
    );

    if (!cart_id) {
      throw new Error('Cart not found for user');
    }

    if (!productInfo) {
      throw new Error('No price provided');
    }

    return await this.prisma.cartDetails.create({
      data: {
        quantity: input.quantity,
        price: productInfo.product.price,
        cart_id,
        variant_id: input.variant_id,
      },
    });
  }

  async getCartDetailByCartId(cart_id: string) {
    return await this.prisma.cartDetails.findMany({
      where: {
        cart_id,
      },
    });
  }

  async getCartDetailWithVariantsByCartId(cart_id: string) {
    return await this.prisma.cartDetails.findMany({
      where: {
        cart_id,
      },
      select: {
        price: true,
        quantity: true,
        variants: {
          select: {
            product: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
  }

  async getCartStatus(userId: string): Promise<CartDetailResponse> {
    const cart_id = await this.cartService.getCartByUserID(userId);
    const CartDetailItems = await this.getCartDetailWithVariantsByCartId(
      cart_id as string,
    );

    const total = CartDetailItems.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);

    const items: CartDetailItem[] = CartDetailItems.map((cartItem) => {
      return {
        name: cartItem.variants.product.name,
        quantity: cartItem.quantity,
        price: cartItem.price,
      };
    });

    return {
      total,
      items,
    };
  }
}
