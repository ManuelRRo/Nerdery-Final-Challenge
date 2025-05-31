import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Cart {
  @Field()
  id: string;

  @Field()
  name: string;
}
