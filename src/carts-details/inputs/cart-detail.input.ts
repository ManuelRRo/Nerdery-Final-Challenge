import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CartDetailInput {
  @Field()
  variant_id: string;

  @Field(() => Int)
  quantity: number;
}
