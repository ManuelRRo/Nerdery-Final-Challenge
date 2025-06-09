import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { PrismaService } from 'src/common/modules/prisma/prisma.service';
import { VariantsModule } from 'src/variants/variants.module';
import { JwtService } from '@nestjs/jwt';
import { AppService } from 'src/app.service';
import { EmailService } from '../email/email.service';
import { SendGridClient } from '../email/sendgrid-client';
import { PaginationModule } from 'src/common/modules/pagination/pagination.module';
import { PrismaModule } from 'src/common/modules/prisma/prisma.module';
import { ProductTasksService } from './jobs/lowVariantStock.jobs';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [VariantsModule, PaginationModule, PrismaModule, UsersModule],
  providers: [
    ProductsResolver,
    ProductsService,
    PrismaService,
    JwtService,
    AppService,
    EmailService,
    SendGridClient,
    ProductTasksService,
    // { provide: APP_GUARD, useClass: ThrottlerGuard },
  ],
  exports: [ProductsService],
})
export class ProductsModule {}
