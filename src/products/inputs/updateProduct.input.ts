import { Field, InputType } from '@nestjs/graphql';
import { PatchProductInput } from './productPatch.input';

@InputType()
export class UpdateProductInput {
  @Field()
  id: string;

  @Field(() => PatchProductInput)
  patch: PatchProductInput;
}
