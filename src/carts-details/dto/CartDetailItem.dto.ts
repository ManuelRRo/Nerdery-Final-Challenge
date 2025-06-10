import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CartDetailItem {
  @Field()
  name: string;

  @Field(() => Int)
  quantity: number;

  @Field(() => Float)
  price: number;
}
