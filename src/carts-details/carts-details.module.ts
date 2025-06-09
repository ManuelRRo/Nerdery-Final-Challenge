import { Module } from '@nestjs/common';
import { CartsDetailsService } from './carts-details.service';
import { CartsDetailsResolver } from './carts-details.resolver';
import { PrismaService } from 'src/common/modules/prisma/prisma.service';
import { CartService } from '../carts/carts.service';
import { JwtService } from '@nestjs/jwt';
import { AppService } from 'src/app.service';
import { EmailService } from '../email/email.service';
import { SendGridClient } from '../email/sendgrid-client';
import { VariantsModule } from 'src/variants/variants.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [VariantsModule, UsersModule],
  providers: [
    CartsDetailsResolver,
    CartsDetailsService,
    PrismaService,
    CartService,
    JwtService,
    AppService,
    EmailService,
    SendGridClient,
  ],
  exports: [CartsDetailsService],
})
export class CartsDetailsModule {}
