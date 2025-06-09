import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from 'src/common/modules/prisma/prisma.service';
import { EmailService } from '../email/email.service';
import { SendGridClient } from '../email/sendgrid-client';
import { AppService } from 'src/app.service';
import { RolesModule } from 'src/roles/roles.module';
import { CartsModule } from 'src/carts/carts.module';

@Module({
  providers: [
    UsersService,
    PrismaService,
    EmailService,
    SendGridClient,
    AppService,
  ],
  exports: [UsersService],
  imports: [RolesModule, CartsModule],
})
export class UsersModule {}
