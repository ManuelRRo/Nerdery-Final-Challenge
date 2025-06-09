import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { SendGridClient } from './sendgrid-client';
import { AppService } from 'src/app.service';
import { EmailController } from './email.controller';

@Module({
  providers: [EmailService, SendGridClient, AppService],
  exports: [EmailService, SendGridClient],
  controllers: [EmailController],
  imports: [],
})
export class EmailModule {}
