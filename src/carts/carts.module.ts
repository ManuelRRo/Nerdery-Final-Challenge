import { Module } from '@nestjs/common';

import { CartsResolver } from './carts.resolver';
import { PrismaService } from 'src/common/modules/prisma/prisma.service';
import { CartService } from './carts.service';

@Module({
  providers: [CartsResolver, PrismaService, CartService],
  exports: [CartService],
})
export class CartsModule {}
