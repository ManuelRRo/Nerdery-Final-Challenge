import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Products {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => Float)
  price: number;
}
