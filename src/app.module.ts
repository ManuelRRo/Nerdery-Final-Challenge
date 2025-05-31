import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BrandsModule } from './modules/brands/brands.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ProductsModule } from './modules/products/products.module';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { VariantsModule } from './modules/variants/variants.module';
import { ProductCategoriesModule } from './modules/product-categories/product-categories.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { DataloaderModule } from './common/modules/dataloader/dataloader.module';
import { DataLoaderService } from './common/modules/dataloader/dataloader.service';
import { OrdersModule } from './modules/orders/orders.module';
import { LikesModule } from './modules/likes/likes.module';
import { RolesModule } from './modules/roles/roles.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { CartsModule } from './modules/carts/carts.module';
import { CartsDetailsModule } from './modules/carts-details/carts-details.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { AppService } from './app.service';
import { FilesModule } from './modules/files/files.module';
import { EmailModule } from './modules/email/email.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { validate } from './env.validation';
import { PaginationModule } from './common/modules/pagination/pagination.module';

@Module({
  imports: [
    //check
    // ThrottlerModule.forRoot([
    //   {
    //     ttl: 5000,
    //     limit: 3,
    //   },
    // ]),
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
  ],
  controllers: [],
  providers: [JwtService, AppService],
  exports: [AppService],
})
export class AppModule {}
