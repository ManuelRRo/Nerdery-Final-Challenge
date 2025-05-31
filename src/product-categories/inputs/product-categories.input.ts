import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class createProductCategories {
  @Field()
  productId: string;

  @Field()
  brandId: string;
}
