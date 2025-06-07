import { Injectable } from '@nestjs/common';
import { MailDataRequired } from '@sendgrid/mail';
import { SendGridClient } from './sendgrid-client';
import { SendEmailDto } from './dtos/sendEmail.dto';

@Injectable()
export class EmailService {
  constructor(private readonly sendGridClient: SendGridClient) {}

  async sendTestEmail(sendMailDto: SendEmailDto): Promise<void> {
    const { recipient, body } = sendMailDto;
    const mail: MailDataRequired = {
      to: recipient,
      from: 'manrico5670@gmail.com', //Approved sender ID in Sendgrid
      subject: 'Tshirt last products on sale Take It!',
      content: [{ type: 'text/html', value: body }],
    };
    await this.sendGridClient.send(mail);
  }
}
