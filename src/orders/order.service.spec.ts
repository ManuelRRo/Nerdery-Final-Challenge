import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from './orders.service';
import { PrismaService } from '../common/modules/prisma/prisma.service';
import { CartDetails, Orders } from '../../generated/prisma';

describe('OrdersService', () => {
  let service: OrdersService;
  let prisma: PrismaService;

  const mockPrismaService = {
    orders: {
      findMany: jest.fn(),
      create: jest.fn(),
      findFirst: jest.fn(),
    },
    orderDetails: {
      createMany: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrdersService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<OrdersService>(OrdersService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllOrders', () => {
    it('should return paginated orders', async () => {
      const mockOrders = [{ id: '0f5c8172' }, { id: '0f5c81721' }] as Orders[];
      mockPrismaService.orders.findMany.mockResolvedValue(mockOrders);

      const result = await service.getAllOrders({ offset: 0, limit: 2 });
      expect(mockPrismaService.orders.findMany).toHaveBeenCalledWith({
        skip: 0,
        take: 2,
      });
      expect(result).toEqual(mockOrders);
    });
  });

  describe('getOrdersByUserId', () => {
    it('should return orders by user_id', async () => {
      const mockOrders = [{ id: '0f5c8172', user_id: '0f5c81723' }] as Orders[];
      mockPrismaService.orders.findMany.mockResolvedValue(mockOrders);

      const result = await service.getOrdersByUserId('0f5c81723');
      expect(mockPrismaService.orders.findMany).toHaveBeenCalledWith({
        where: { user_id: '0f5c81723' },
      });
      expect(result).toEqual(mockOrders);
    });
  });

  describe('createOrder', () => {
    it('should create an order and add order details', async () => {
      const cartDetails: CartDetails[] = [
        { quantity: 2, price: 20, variant_id: '9a026d8c-92' } as CartDetails,
      ];
      const createdOrder = { id: '9a026d8c-9244' } as Orders;

      mockPrismaService.orders.create.mockResolvedValue(createdOrder);
      mockPrismaService.orderDetails.createMany.mockResolvedValue({ count: 1 });

      const result = await service.createOrder('9a026d8c-9244', cartDetails);

      expect(mockPrismaService.orders.create).toHaveBeenCalledWith({
        data: {
          user: {
            connect: { id: '9a026d8c-9244' },
          },
        },
      });

      expect(mockPrismaService.orderDetails.createMany).toHaveBeenCalledWith({
        data: [
          {
            quantity: 2,
            price: 20,
            variant_id: '9a026d8c-92',
            orderDetails_id: '9a026d8c-9244',
          },
        ],
      });

      expect(result).toEqual(createdOrder);
    });
  });

  describe('getOrderByPaymentIntent', () => {
    it('should return order by payment intent', async () => {
      const mockOrder = {
        id: '1b16-43c7-b47b-307d1',
        payment: { payment_intent: 'pi_123' },
      };
      mockPrismaService.orders.findFirst.mockResolvedValue(mockOrder);

      const result = await service.getOrderByPaymentIntent('pi_123');

      expect(mockPrismaService.orders.findFirst).toHaveBeenCalledWith({
        where: {
          payment: {
            payment_intent: 'pi_123',
          },
        },
        include: {
          payment: true,
          orderDetails: {
            select: {
              id: true,
              variants: {
                select: {
                  id: true,
                  stock: true,
                  product_id: true,
                },
              },
            },
          },
        },
      });

      expect(result).toEqual(mockOrder);
    });
  });
});
