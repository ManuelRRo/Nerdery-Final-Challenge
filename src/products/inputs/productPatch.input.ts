import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class PatchProductInput {
  @Field({ nullable: true })
  brand_id?: string;

  @Field({ nullable: true })
  name?: string;

  @Field(() => Float, { nullable: true })
  price?: number;

  @Field({ nullable: true })
  categoryId?: string;
}
