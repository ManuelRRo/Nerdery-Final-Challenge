import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CartsDetailsService } from './carts-details.service';
import { UseFilters, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/common/guards/gql-auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/role.decorator';
import { ROLES } from 'src/common/enums/roles.enum';
import { CartDetailResponse } from './response/cartDetail.response';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { CartService } from '../carts/carts.service';
import { CartDetailInput } from './inputs/cart-detail.input';
import { CartDetailModel } from 'src/carts-details/model/cart-detail.model';
import { GraphQLExceptionsFilter } from 'src/common/filters/gql-exception.filter';
import { AddCartDetailResponse } from './response/addCartDetail.response';

@Resolver(() => CartDetailModel)
@UseFilters(GraphQLExceptionsFilter)
export class CartsDetailsResolver {
  constructor(
    private readonly cartsDetailsService: CartsDetailsService,
    private readonly cartService: CartService,
  ) {}

  @UseGuards(GqlAuthGuard, RolesGuard)
  @Mutation(() => AddCartDetailResponse, { name: 'addCartDetailToCart' })
  @Roles(ROLES.CLIENT)
  async AddCartItem(
    @Args('input') input: CartDetailInput,
    @CurrentUser() user_id: string,
  ) {
    return this.cartsDetailsService.addCartDetail(input, user_id);
  }

  @UseGuards(GqlAuthGuard, RolesGuard)
  @Query(() => CartDetailResponse, {
    name: 'getCartStatus',
    description:
      'Give a summary of the total amount of the cart and item on it.',
  })
  @Roles(ROLES.CLIENT)
  async getCartStatus(@CurrentUser() user_id: string) {
    return this.cartsDetailsService.getCartStatus(user_id);
  }
}
