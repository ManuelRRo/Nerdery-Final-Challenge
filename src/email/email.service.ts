import { Injectable } from '@nestjs/common';
import { MailDataRequired } from '@sendgrid/mail';
import { SendGridClient } from './sendgrid-client';
import { SendEmailDto } from './dtos/sendEmail.dto';
import { AppService } from '../app.service';

@Injectable()
export class EmailService {
  constructor(
    private readonly sendGridClient: SendGridClient,
    private readonly appService: AppService,
  ) {}

  async sendTestEmail(sendMailDto: SendEmailDto): Promise<void> {
    const { recipient, body } = sendMailDto;
    const mail: MailDataRequired = {
      to: recipient,
      from: this.appService.configSendGridSenderEmail() as string, //Approved sender ID in Sendgrid
      subject: 'Tshirt last products on sale Take It!',
      content: [{ type: 'text/html', value: body }],
    };
    await this.sendGridClient.send(mail);
  }
}
