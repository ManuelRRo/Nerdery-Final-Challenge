import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from '../orders/orders.service';
import { PaymentsService } from './payments.service';
import { PrismaService } from '../common/modules/prisma/prisma.service';
import { AppService } from '../app.service';
import { CartService } from '../carts/carts.service';
import { CartsDetailsService } from '../carts-details/carts-details.service';
import { ConfigService } from '@nestjs/config';
import { VariantsService } from '../variants/variants.service';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { CartDetails, Prisma } from '../../generated/prisma';
import Stripe from 'stripe';

describe('Payments Service', () => {
  let appService: AppService;
  let mockPrismaService: DeepMockProxy<PrismaService>;
  let mockOrderService: DeepMockProxy<OrdersService>;
  let mockCartService: DeepMockProxy<CartService>;
  let mockCartDetailService: DeepMockProxy<CartsDetailsService>;
  let service: PaymentsService;
  let mockStripe: DeepMockProxy<Stripe>;

  beforeEach(async () => {
    mockCartService = mockDeep<CartService>();
    mockPrismaService = mockDeep<PrismaService>();
    mockOrderService = mockDeep<OrdersService>();
    mockCartDetailService = mockDeep<CartsDetailsService>();
    mockStripe = mockDeep<Stripe>();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppService,
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: OrdersService, useValue: mockOrderService },
        { provide: CartService, useValue: mockCartService },
        { provide: CartsDetailsService, useValue: mockCartDetailService },
        { provide: Stripe, useValue: mockStripe },
        ConfigService,
        PaymentsService,
        VariantsService,
      ],
    }).compile();

    appService = module.get<AppService>(AppService);
    service = module.get<PaymentsService>(PaymentsService);

    mockPrismaService.payments.create.mockClear();
    mockPrismaService.payments.update.mockClear();
  });
  it('should Be defined', () => {
    expect(appService).toBeDefined();
    expect(mockPrismaService).toBeDefined();
    expect(mockOrderService).toBeDefined();
    expect(mockCartService).toBeDefined();
    expect(mockCartDetailService).toBeDefined();
    expect(service).toBeDefined();
  });
  describe('createPaymentIntent', () => {
    it('amount should be greater than 0 to create an order if not throw an error', async () => {
      // Arrange
      const cartDetailsFull: CartDetails[] = [
        {
          id: '0f5c8172-1b16-43c7-b47b-6d0111d307d1',
          quantity: 3,
          price: 3.33,
          variant_id: '0f5c8172-1b16-43c7-b47b-6d0111d789d1',
          cart_id: 'f74c8172-1b16-43c7-b47b-6d0111d307d1',
        },
      ];
      const cartDetailsEmpty: CartDetails[] = [];

      const user = {
        userId: '0f5c8172-1b16-43c7-b47b-6d0111d789d1',
        email: 'user@mail.com',
      };

      const idCart = '0f5c8172-1b16-43c7-b47b-6d0111d789d1';
      mockCartService.getCartByUserID.mockResolvedValueOnce(idCart);
      mockCartDetailService.getCartDetailByCartId.mockResolvedValueOnce(
        cartDetailsEmpty,
      );
      // Act
      const result = service.createPaymentIntent(user);
      // Assert
      await expect(result).rejects.toThrow(Error);
    });
  });
  describe('webhooksEvent', () => {
    it('should throw an error if signature verification failed', async () => {
      //Arrange
      // const req: RawBodyRequest<Request>;
      // const result = await service.webhooksEvent(req);
    });
  });
  describe('addPayment', () => {
    it('Should return a payment if exist', async () => {
      //Arrange
      const paymentInit: Prisma.PaymentsCreateInput = {
        status: 'succeed',
        amount: 100,
        currency: 'usd',
        receipt_url: 'url',
        payment_intent: 'pi_3RWg7nH65Yc4W3X51DgdDCCM',
        order: {
          connect: { id: '0f5c8172-1b16-43c7-b47b-6d0111d789d1' },
        },
      };
      const payment = {
        id: '0f5c8172-1b16-43c7-b47b-6d0111d789d1',
        created_at: new Date(),
        updated_at: new Date(),
        status: 'requires_payment_method',
        amount: 234,
        currency: 'usd',
        receipt_url: 'url',
        payment_intent:
          'https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xUlNwdkxINjVZYzRXM1g1KKH-hsIGMgaC8Kyz6vE6LBYjpB_Mhv8RrJGACDBrZgTo3jT0I8rtZ0C6TMmWRqtXktM1esklrlQhae-Q',
        orderId: '1f5c8172-1b16-43c7-b47b-6d0111d789d1',
      };
      mockPrismaService.payments.create.mockResolvedValueOnce(payment);
      const orderId = '0f5c8172-1b16-43c7-b47b-6d0111d789d1';
      const status = 'succeed';
      const paymentIntent = 'pi_3RWg7nH65Yc4W3X51DgdDCCM';

      //Act
      const result = await service.addPayment(
        orderId,
        paymentIntent,
        status,
        paymentInit,
      );

      //Asserts
      expect(result).toEqual(payment);
      expect(mockPrismaService.payments.create).toBeCalledWith({
        data: paymentInit,
      });
    });
  });
  describe('updateStatusByPaymentIntent', () => {
    it('Should return an update payment', async () => {
      //Arrange
      const payment = {
        id: '0f5c8172-1b16-43c7-b47b-6d0111d789d1',
        created_at: new Date(),
        updated_at: new Date(),
        status: 'succeed',
        amount: 234,
        currency: 'usd',
        receipt_url: 'url',
        payment_intent:
          'https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xUlNwdkxINjVZYzRXM1g1KKH-hsIGMgaC8Kyz6vE6LBYjpB_Mhv8RrJGACDBrZgTo3jT0I8rtZ0C6TMmWRqtXktM1esklrlQhae-Q',
        orderId: '1f5c8172-1b16-43c7-b47b-6d0111d789d1',
      };
      const paymentIntent = 'pi_3RWg7nH65Yc4W3X51DgdDCCM';
      mockPrismaService.payments.update.mockResolvedValue(payment);
      const status = 'succeed';
      //Act
      const result = await service.updateStatusByPaymentIntent(
        paymentIntent,
        status,
      );

      //Asserts
      expect(result).toEqual(payment);
      expect(mockPrismaService.payments.update).toHaveBeenCalledWith({
        where: { payment_intent: paymentIntent },
        data: { status: status },
      });
    });
  });
});
