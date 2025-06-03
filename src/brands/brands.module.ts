import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsResolver } from './brands.resolver';
import { ProductsModule } from 'src/products/products.module';
import { JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from '../users/users.module';
import { AppService } from 'src/app.service';
import { PrismaModule } from 'src/common/modules/prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProductsModule,
    ConfigModule,
    UsersModule,
    PrismaModule,
  ],
  providers: [
    BrandsResolver,
    BrandsService,
    JwtService,
    ConfigService,
    AppService,
  ],
})
export class BrandsModule {}
