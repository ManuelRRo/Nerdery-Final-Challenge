import { IsString } from 'class-validator';

export class ResetPasswordDto {
  @IsString()
  passwd: string;
}
