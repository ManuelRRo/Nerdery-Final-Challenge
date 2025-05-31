import { Module } from '@nestjs/common';
import { CartsDetailsService } from './carts-details.service';
import { CartsDetailsResolver } from './carts-details.resolver';
import { PrismaService } from 'src/prisma.service';
import { VariantsService } from '../variants/variants.service';
import { CartService } from '../carts/carts.service';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { AppService } from 'src/app.service';
import { EmailService } from '../email/email.service';
import { SendGridClient } from '../email/sendgrid-client';

@Module({
  providers: [
    CartsDetailsResolver,
    CartsDetailsService,
    PrismaService,
    VariantsService,
    CartService,
    JwtService,
    UsersService,
    AppService,
    EmailService,
    SendGridClient,
  ],
})
export class CartsDetailsModule {}
