import { Test, TestingModule } from '@nestjs/testing';
import { CartService } from './carts.service';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { PrismaService } from '../common/modules/prisma/prisma.service';

describe('Carts Service', () => {
  let mockPrismaService: DeepMockProxy<PrismaService>;
  let service: CartService;
  beforeEach(async () => {
    mockPrismaService = mockDeep<PrismaService>();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CartService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<CartService>(CartService);
  });

  it('should Be defined', () => {
    expect(service).toBeDefined();
    expect(mockPrismaService).toBeDefined();
  });
  describe('getCartByUserId', () => {
    it('should be called with', async () => {
      const carts = {
        id: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
        user_id: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const user_id = '0f5c8172-2c13-43c7-b47b-6d0111d307d1';
      mockPrismaService.carts.findFirst.mockResolvedValueOnce(carts);
      const result = await service.getCartByUserID(user_id);
      expect(mockPrismaService.carts.findFirst).toHaveBeenCalledWith({
        where: {
          user_id,
        },
      });
    });
  });
  describe('createCart', () => {
    it('should be called wih', async () => {
      const carts = {
        id: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
        user_id: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      mockPrismaService.carts.create.mockResolvedValueOnce(carts);
      const id = '0f5c8172-2c13-43c7-b47b-6d0111d307d1';
      await service.createCarts(id);
      expect(carts).toStrictEqual(carts);
    });
  });
});
