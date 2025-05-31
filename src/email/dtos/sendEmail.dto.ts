import { IsString } from 'class-validator';

export class SendEmailDto {
  @IsString()
  recipient: string;
  @IsString()
  body: string;
}
