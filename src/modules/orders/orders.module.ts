import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { AppService } from 'src/app.service';
import { EmailService } from '../email/email.service';
import { SendGridClient } from '../email/sendgrid-client';

@Module({
  providers: [
    OrdersResolver,
    OrdersService,
    PrismaService,
    JwtService,
    UsersService,
    AppService,
    EmailService,
    SendGridClient,
  ],
  exports: [OrdersService],
})
export class OrdersModule {}
