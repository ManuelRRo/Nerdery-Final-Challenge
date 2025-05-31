import { Resolver } from '@nestjs/graphql';
import { Cart } from 'src/carts/model/cart.model';

@Resolver(() => Cart)
export class CartsResolver {}
