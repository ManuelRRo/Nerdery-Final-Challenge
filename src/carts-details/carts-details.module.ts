import { Module } from '@nestjs/common';
import { CartsDetailsService } from './carts-details.service';
import { CartsDetailsResolver } from './carts-details.resolver';
import { PrismaService } from 'src/common/modules/prisma/prisma.service';
import { CartService } from '../carts/carts.service';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { AppService } from 'src/app.service';
import { EmailService } from '../email/email.service';
import { SendGridClient } from '../email/sendgrid-client';
import { VariantsModule } from 'src/variants/variants.module';

@Module({
  imports: [VariantsModule],
  providers: [
    CartsDetailsResolver,
    CartsDetailsService,
    PrismaService,
    CartService,
    JwtService,
    UsersService,
    AppService,
    EmailService,
    SendGridClient,
  ],
})
export class CartsDetailsModule {}
