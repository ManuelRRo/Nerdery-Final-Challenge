import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class createCategories {
  @Field()
  name: string;

  @Field()
  parentId: string;

  @Field(() => Boolean)
  active: boolean;
}
