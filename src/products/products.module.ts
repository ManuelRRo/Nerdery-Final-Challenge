import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { PrismaService } from 'src/common/modules/prisma/prisma.service';
import { VariantsModule } from 'src/variants/variants.module';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { AppService } from 'src/app.service';
import { EmailService } from '../email/email.service';
import { SendGridClient } from '../email/sendgrid-client';
import { PaginationModule } from 'src/common/modules/pagination/pagination.module';
import { PrismaModule } from 'src/common/modules/prisma/prisma.module';

@Module({
  imports: [VariantsModule, PaginationModule, PrismaModule],
  providers: [
    ProductsResolver,
    ProductsService,
    PrismaService,
    JwtService,
    UsersService,
    AppService,
    EmailService,
    SendGridClient,
    // { provide: APP_GUARD, useClass: ThrottlerGuard },
  ],
  exports: [ProductsService],
})
export class ProductsModule {}
