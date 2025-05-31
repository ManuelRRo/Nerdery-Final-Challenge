import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CartDetailResponse {
  @Field(() => Int)
  quantity: number;

  @Field(() => Float)
  price: number;
}
