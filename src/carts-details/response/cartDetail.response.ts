import { Field, Float, ObjectType } from '@nestjs/graphql';
import { CartDetailItem } from '../dto/CartDetailItem.dto';

@ObjectType()
export class CartDetailResponse {
  @Field(() => Float)
  total: number;

  @Field(() => [CartDetailItem])
  items: CartDetailItem[];
}
