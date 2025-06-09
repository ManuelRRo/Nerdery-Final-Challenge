import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';
import { PrismaService } from 'src/common/modules/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AppService } from 'src/app.service';
import { EmailService } from '../email/email.service';
import { SendGridClient } from '../email/sendgrid-client';
import { UsersModule } from 'src/users/users.module';

@Module({
  providers: [
    OrdersResolver,
    OrdersService,
    PrismaService,
    JwtService,
    AppService,
    EmailService,
    SendGridClient,
  ],
  exports: [OrdersService],
  imports: [UsersModule],
})
export class OrdersModule {}
