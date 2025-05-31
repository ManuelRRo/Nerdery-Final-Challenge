import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProductCategories {
  @Field()
  productId: string;

  @Field()
  brandId: string;
}
