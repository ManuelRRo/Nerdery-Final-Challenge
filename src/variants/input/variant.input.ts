import { Field, InputType, Int, registerEnumType } from '@nestjs/graphql';

export enum Size {
  NONE = 'NONE',
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
  X_LARGE = 'X_LARGE',
  XX_LARGE = 'XX_LARGE',
  S4YEARS_XS = 'S4YEARS_XS',
}

export enum TextColor {
  NONE = 'NONE',
  GREEN = 'GREEN',
  BLUE = 'BLUE',
  YELLOW = 'YELLOW',
  PINK = 'PINK',
  SKY_BLUE = 'SKY_BLUE',
  BROWN = 'BROWN',
  BLACK = 'BLACK',
  WHITE = 'WHITE',
  ORANGE = 'ORANGE',
  PURPLE = 'PURPLE',
}

registerEnumType(Size, {
  name: 'Size',
  description: 'Sizes shirts',
});

registerEnumType(TextColor, {
  name: 'TextColors',
  description: 'Colors Shirts',
});

@InputType()
export class VariantsInput {
  @Field()
  product_id: string;

  @Field({ nullable: true }) // Make file_id optional
  file_id?: string | null;

  @Field(() => Size, { defaultValue: Size.NONE })
  size?: Size;

  @Field(() => TextColor, { defaultValue: TextColor.NONE })
  textColor?: TextColor;

  @Field({ nullable: true }) // Make rgb optional
  rgb?: string | null;

  @Field(() => Int)
  stock: number;
}
