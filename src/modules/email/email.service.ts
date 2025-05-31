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
      subject: 'Test email',
      content: [{ type: 'text/plain', value: body }],
    };
    await this.sendGridClient.send(mail);
  }

  async sendEmailWithTemplate(sendMailDto: SendEmailDto): Promise<void> {
    const { recipient, body } = sendMailDto;
    const mail: MailDataRequired = {
      to: recipient,
      cc: 'example@mail.com', //Assuming you want to send a copy to this email
      from: 'noreply@domain.com', //Approved sender ID in Sendgrid
      templateId: 'Sendgrid_template_ID', //Retrieve from config service or environment variable
      dynamicTemplateData: { body, subject: 'Send Email with template' }, //The data to be used in the template
    };
    await this.sendGridClient.send(mail);
  }
}
