import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { EmailService } from './email.service';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { SendEmailDto } from './dtos/sendEmail.dto';
import { ValidationPipe } from 'src/common/pipes/validation.pipe';

@Controller('email')
@UseFilters(HttpExceptionFilter)
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send-test-email')
  async sendEmail(
    @Body(new ValidationPipe()) sendEmailDto: SendEmailDto,
  ): Promise<void> {
    await this.emailService.sendTestEmail(sendEmailDto);
  }
}
