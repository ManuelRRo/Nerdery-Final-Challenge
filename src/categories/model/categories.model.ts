import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Categories {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => Boolean)
  active: boolean;
}
