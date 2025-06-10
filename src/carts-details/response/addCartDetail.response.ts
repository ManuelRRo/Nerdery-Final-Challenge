import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AddCartDetailResponse {
  @Field(() => Int)
  quantity: number;

  @Field(() => Float)
  price: number;
}
