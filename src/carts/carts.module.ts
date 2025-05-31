import { Module } from '@nestjs/common';

import { CartsResolver } from './carts.resolver';
import { PrismaService } from 'src/common/modules/prisma/prisma.service';

@Module({
  providers: [CartsResolver, PrismaService],
})
export class CartsModule {}
