import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BrandsModule } from './brands/brands.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ProductsModule } from './products/products.module';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { VariantsModule } from './variants/variants.module';
import { ProductCategoriesModule } from './product-categories/product-categories.module';
import { CategoriesModule } from './categories/categories.module';
import { DataloaderModule } from './common/modules/dataloader/dataloader.module';
import { DataLoaderService } from './common/modules/dataloader/dataloader.service';
import { OrdersModule } from './orders/orders.module';
import { LikesModule } from './likes/likes.module';
import { RolesModule } from './roles/roles.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { CartsModule } from './carts/carts.module';
import { CartsDetailsModule } from './carts-details/carts-details.module';
import { PaymentsModule } from './payments/payments.module';
import { AppService } from './app.service';
import { FilesModule } from './files/files.module';
import { EmailModule } from './email/email.module';
import { validate } from './env.validation';
import { PaginationModule } from './common/modules/pagination/pagination.module';
import { PrismaModule } from './common/modules/prisma/prisma.module';
import { ScheduleModule } from '@nestjs/schedule';
import { TestingModule } from './testing/testing.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      validate,
      isGlobal: true,
      // envFilePath: `.env`,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [DataloaderModule],
      useFactory: (dataloderService: DataLoaderService) => ({
        autoSchemaFile: 'src/schema.gql',
        playground: false,
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
        introspection: true,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        context: ({ req }) => ({ req, loaders: dataloderService.getLoaders() }),
      }),
      inject: [DataLoaderService],
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        global: true, // This makes the module global
        signOptions: { expiresIn: '30m' },
      }),
    }),
    UsersModule,
    AuthModule,
    BrandsModule,
    ProductsModule,
    VariantsModule,
    ProductCategoriesModule,
    CategoriesModule,
    DataloaderModule,
    OrdersModule,
    LikesModule,
    RolesModule,
    CartsModule,
    CartsDetailsModule,
    PaymentsModule,
    FilesModule,
    EmailModule,
    PaginationModule,
    PrismaModule,
    TestingModule,
  ],
  controllers: [],
  providers: [JwtService, AppService],
  exports: [AppService],
})
export class AppModule {}
