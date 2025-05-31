import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsResolver } from './brands.resolver';
import { PrismaService } from 'src/prisma.service';
import { ProductsModule } from 'src/modules/products/products.module';
import { JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from '../users/users.module';
import { AppService } from 'src/app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProductsModule,
    ConfigModule,
    UsersModule,
  ],
  providers: [
    BrandsResolver,
    BrandsService,
    PrismaService,
    JwtService,
    ConfigService,
    AppService,
  ],
})
export class BrandsModule {}
