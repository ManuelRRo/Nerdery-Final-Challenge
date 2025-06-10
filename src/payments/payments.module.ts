import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { AppService } from 'src/app.service';
import { PrismaService } from 'src/common/modules/prisma/prisma.service';
import { OrdersService } from '../orders/orders.service';
import { JwtService } from '@nestjs/jwt';
import { CartsModule } from 'src/carts/carts.module';
import { CartsDetailsModule } from 'src/carts-details/carts-details.module';
import { VariantsModule } from 'src/variants/variants.module';

@Module({
  controllers: [PaymentsController],
  providers: [
    PaymentsService,
    AppService,
    PrismaService,
    OrdersService,
    JwtService,
  ],
  exports: [PaymentsService],
  imports: [CartsModule, CartsDetailsModule, VariantsModule],
})
export class PaymentsModule {}
