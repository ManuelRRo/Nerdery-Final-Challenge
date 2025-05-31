import { Field, ObjectType } from '@nestjs/graphql';
import { Products } from 'src/modules/products/model/products.model';
import { Meta } from './meta.dto';

@ObjectType()
export class PaginatedProductData {
  @Field(() => [Products])
  data: [Products];

  @Field(() => Meta)
  meta: Meta;
}
