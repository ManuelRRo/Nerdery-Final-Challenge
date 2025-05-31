import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/modules/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RolesModule } from '../roles/roles.module';
import { AppService } from 'src/app.service';
import { EmailService } from '../email/email.service';
import { SendGridClient } from '../email/sendgrid-client';

@Module({
  providers: [AuthService, AppService, EmailService, SendGridClient],
  controllers: [AuthController],
  imports: [
    UsersModule,
    ConfigModule,
    RolesModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      // eslint-disable-next-line @typescript-eslint/require-await
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        global: true,
        signOptions: { expiresIn: '30m' },
      }),
    }),
  ],
  exports: [AuthService],
})
export class AuthModule {}
