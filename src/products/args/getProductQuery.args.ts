import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Size, TextColor } from 'src/variants/model/variants.model';

@ArgsType()
export class GetProductQueryDto {
  @Field(() => Int)
  offset: number;

  @Field(() => Int)
  limit: number;

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
