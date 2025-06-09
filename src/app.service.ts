import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(readonly configService: ConfigService) {}
  configJwtSecret(): string | undefined {
    return this.configService.get<string>('JWT_SECRET');
  }
  configStripeSecret(): string | undefined {
    return this.configService.get<string>('STRIPE_SECRET_KEY');
  }
  configWebhookSecret(): string | undefined {
    return this.configService.get<string>('STRIPE_WEBHOOB_KEY');
  }
  configAwsAccessKeyId(): string | undefined {
    return this.configService.get<string>('AWS_ACCESS_KEY_ID');
  }
  configAwsSecretAccessKey(): string | undefined {
    return this.configService.get<string>('AWS_SECRET_ACCESS_KEY_ID');
  }
  configAwsBucket(): string | undefined {
    return this.configService.get<string>('AWS_BUCKET');
  }
  configAwsRegion(): string | undefined {
    return this.configService.get<string>('AWS_REGION');
  }
  configSendGridKey(): string | undefined {
    return this.configService.get<string>('SENDGRID_API_KEY');
  }
  configSendGridSenderEmail(): string | undefined {
    return this.configService.get<string>('SENDGRID_EMAIL');
  }
}
