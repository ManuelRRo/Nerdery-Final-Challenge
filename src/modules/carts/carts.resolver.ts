import { Resolver } from '@nestjs/graphql';
import { Cart } from 'src/modules/carts/model/cart.model';

@Resolver(() => Cart)
export class CartsResolver {}
