import { Module } from '@nestjs/common';

import { CartsResolver } from './carts.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [CartsResolver, PrismaService],
})
export class CartsModule {}
