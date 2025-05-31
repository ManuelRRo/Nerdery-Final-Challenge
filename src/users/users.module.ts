import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from 'src/common/modules/prisma/prisma.service';
import { EmailService } from '../email/email.service';
import { SendGridClient } from '../email/sendgrid-client';
import { AppService } from 'src/app.service';

@Module({
  providers: [
    UsersService,
    PrismaService,
    EmailService,
    SendGridClient,
    AppService,
  ],
  exports: [UsersService],
})
export class UsersModule {}
