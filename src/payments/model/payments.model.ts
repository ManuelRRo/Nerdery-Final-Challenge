import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Payments {
  @Field()
  id: string;
  @Field(() => Date)
  created_at: Date;
  @Field(() => Date)
  updated_at: Date;
  @Field()
  status: string;
  @Field(() => Float)
  amount: number;
  @Field()
  currency: string;
  @Field()
  receipt_url: string;
  @Field()
  payment_intent: string;
  @Field()
  orderId: string;
}
