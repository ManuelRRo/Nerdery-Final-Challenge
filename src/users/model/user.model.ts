import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Users {
  @Field()
  id: string;

  @Field()
  nickname: string;

  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field()
  email: string;
}
