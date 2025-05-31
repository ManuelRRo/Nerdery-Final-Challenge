import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Brand {
  @Field()
  id: string;

  @Field()
  name: string;
}
