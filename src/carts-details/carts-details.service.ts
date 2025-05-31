import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/modules/prisma/prisma.service';
import { CartDetailInput } from './inputs/cart-detail.input';
import { VariantsService } from '../variants/variants.service';
import { CartService } from '../carts/carts.service';
// import { VariantWithProductInfo } from 'src/common/dtos/Variants.dto';

@Injectable()
export class CartsDetailsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly variantService: VariantsService,
    private readonly cartService: CartService,
  ) {}

  async addCartDetail(input: CartDetailInput, user_id: string) {
    // const productInfo: VariantWithProductInfo =
    //   this.variantService.getVariantWithProductInfo(variant_id);
    const cart_id = await this.cartService.getCartByUserID(user_id);
    const productInfo = await this.variantService.getVariantWithProductInfo(
      input.variant_id,
    );
    console.log(productInfo);
    // Verify cart_id exists
    if (!cart_id) {
      throw new Error('Cart not found for user');
    }

    if (!productInfo) {
      throw new Error('No price provided');
    }

    console.log('Herre price', input, cart_id);
    return await this.prisma.cartDetails.create({
      data: {
        quantity: input.quantity,
        price: productInfo.product.price,
        cart_id,
        variant_id: input.variant_id,
      },
    });
  }
}
