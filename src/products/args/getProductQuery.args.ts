import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Size, TextColor } from 'src/variants/model/variants.model';

@ArgsType()
export class GetProductQueryDto {
  @Field(() => Int, { defaultValue: 0 })
  offset?: number = 0;

  @Field(() => Int, { defaultValue: 10 })
  limit?: number = 10;

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
