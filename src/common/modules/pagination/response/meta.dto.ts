import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Meta {
  @Field(() => Int)
  itemsPerPage: number;

  @Field(() => Int)
  totalItems: number;

  @Field(() => Int)
  currentPage: number;

  @Field(() => Int)
  totalPages: number;
}
