import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ProductActiveInput {
  @Field()
  id: string;

  @Field(() => Boolean)
  active: boolean;
}
