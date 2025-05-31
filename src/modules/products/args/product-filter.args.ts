import { ArgsType, Field } from '@nestjs/graphql';
import { Size, TextColor } from 'src/modules/variants/model/variants.model';

@ArgsType()
export class ProductFilteArgs {
  @Field({ nullable: true })
  brand_id?: string;

  @Field({ nullable: true })
  parentCategory?: string;

  @Field({ nullable: true })
  categoryId?: string;

  @Field(() => Size, { nullable: true })
  size?: Size;

  @Field(() => TextColor, { nullable: true })
  textColor?: TextColor;
}

// PaginationArgs,
// ProductFilteArgs,
