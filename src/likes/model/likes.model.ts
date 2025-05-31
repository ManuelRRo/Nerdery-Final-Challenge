import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Likes {
  @Field()
  productId: string;
}
