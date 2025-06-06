import { Injectable, Logger } from '@nestjs/common';
import { MailDataRequired, default as SendGrid } from '@sendgrid/mail';
import { AppService } from 'src/app.service';

@Injectable()
export class SendGridClient {
  private logger: Logger;
  constructor(private readonly appService: AppService) {
    //Initialize the logger. This is done for simplicity. You can use a logger service instead
    this.logger = new Logger(SendGridClient.name);
    //Get the API key from config service or environment variable
    SendGrid.setApiKey(appService.configSendGridKey() as string);
  }

  async send(mail: MailDataRequired): Promise<void> {
    try {
      await SendGrid.send(mail);
      this.logger.log(`Email successfully dispatched to ${mail.to as string}`);
    } catch (error) {
      //You can do more with the error
      this.logger.error('Error while sending email', error);
      throw error;
    }
  }
}

//NOTE You have to set "esModuleInterop" to true in your tsconfig file to be able to use the default key in import.
