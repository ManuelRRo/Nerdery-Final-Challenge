import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { PrismaService } from '../common/modules/prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from './orders.service';
import { cartDetailData, dataOrder, ordersData } from '../common/mocks/data';
import { PaginationArgs } from '../common/args/pagination.args';

describe('', () => {
  let mockPrismaService: DeepMockProxy<PrismaService>;
  let service: OrdersService;
  beforeEach(async () => {
    mockPrismaService = mockDeep<PrismaService>();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrdersService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<OrdersService>(OrdersService);
    mockPrismaService.orders.findMany.mockClear();
  });
  const paginationArgs: PaginationArgs = {
    offset: 0,
    limit: 5,
  };
  it('should Be defined', () => {
    expect(service).toBeDefined();
    expect(mockPrismaService).toBeDefined();
  });

  describe('getAllOrders', () => {
    it('should be called with offset and limit', async () => {
      mockPrismaService.orders.findMany.mockResolvedValueOnce(ordersData);

      const result = await service.getAllOrders(paginationArgs);

      expect(result).toEqual(ordersData);
      expect(mockPrismaService.orders.findMany).toHaveBeenCalledWith({
        skip: paginationArgs.offset,
        take: paginationArgs.limit,
      });
    });
  });

  describe('getOrdersByUserId', () => {
    it('should return an order', async () => {
      mockPrismaService.orders.create.mockResolvedValueOnce(ordersData[0]);

      const user_id = '9a026d8c-9264-4a2f-b8c0-fd58200d55b8';

      const result = await service.createOrder(user_id, cartDetailData);

      jest.spyOn(service, 'addOrderDetailToOrder').mockResolvedValueOnce();

      expect(result).toEqual(ordersData[0]);
    });
  });
});
