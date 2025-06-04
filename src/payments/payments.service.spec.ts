import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from '../orders/orders.service';
import { PaymentsService } from './payments.service';
import { PrismaService } from '../common/modules/prisma/prisma.service';
import { AppService } from '../app.service';
import { CartService } from '../carts/carts.service';
import { CartsDetailsService } from '../carts-details/carts-details.service';
import { ConfigService } from '@nestjs/config';
import { VariantsService } from '../variants/variants.service';

const mockPrismaService = {
  brands: {
    findMany: jest.fn(),
    create: jest.fn(),
    findFirst: jest.fn(),
  },
};

const mockOrdersService = {
  getOrderByPaymentIntent: jest.fn(),
};

describe('Payments Service', () => {
  let appService: AppService;
  let prismaService: PrismaService;
  let orderService: OrdersService;
  let cartService: CartService;
  let cartDetailService: CartsDetailsService;
  let service: PaymentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppService,
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: OrdersService, useValue: mockOrdersService },
        CartService,
        CartsDetailsService,
        ConfigService,
        PaymentsService,
        VariantsService,
      ],
    }).compile();

    appService = module.get<AppService>(AppService);
    prismaService = module.get<PrismaService>(PrismaService);
    orderService = module.get<OrdersService>(OrdersService);
    cartService = module.get<CartService>(CartService);
    cartDetailService = module.get<CartsDetailsService>(CartsDetailsService);
    service = module.get<PaymentsService>(PaymentsService);
  });
  it('should Be defined', () => {
    expect(appService).toBeDefined();
    expect(prismaService).toBeDefined();
    expect(orderService).toBeDefined();
    expect(cartService).toBeDefined();
    expect(cartDetailService).toBeDefined();
    expect(service).toBeDefined();
  });
  describe('createPaymentIntent', () => {});
  describe('webhooksEvent', () => {});
  describe('addPayment', () => {});
  describe('updateStatusByPaymentIntent', () => {});
});
