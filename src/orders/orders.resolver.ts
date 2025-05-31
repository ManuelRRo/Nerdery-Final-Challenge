import { Args, Query, Resolver } from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { Orders } from 'src/orders/model/orders.model';
import { PaginationArgs } from 'src/common/args/pagination.args';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { GqlAuthGuard } from 'src/common/guards/gql-auth.guard';
import { UseFilters, UseGuards } from '@nestjs/common';
import { ROLES } from 'src/common/enums/roles.enum';
import { Roles } from 'src/common/decorators/role.decorator';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { GraphQLExceptionsFilter } from 'src/common/filters/gql-exception.filter';

@Resolver()
@UseFilters(GraphQLExceptionsFilter)
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @UseGuards(GqlAuthGuard, RolesGuard)
  @Query(() => [Orders], { name: 'Orders' })
  @Roles(ROLES.MANAGER)
  async getAllOrders(
    @Args() paginationArgs: PaginationArgs,
  ): Promise<Orders[]> {
    return await this.ordersService.getAllOrders(paginationArgs);
  }
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Query(() => [Orders], { name: 'Order' })
  @Roles(ROLES.CLIENT)
  async getOrderById(@CurrentUser() userId: string): Promise<Orders[] | null> {
    return await this.ordersService.getOrdersByUserId(userId);
  }
}
