import { Test, TestingModule } from '@nestjs/testing';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { PrismaService } from '../common/modules/prisma/prisma.service';
import { VariantsService } from '..//variants/variants.service';
import { CartsDetailsService } from './carts-details.service';
import { CartDetails } from '../../generated/prisma';
import { CartService } from '../carts/carts.service';

describe('Carts Service', () => {
  let mockPrismaService: DeepMockProxy<PrismaService>;
  let variantsService: DeepMockProxy<VariantsService>;
  let mockCartService: DeepMockProxy<CartService>;
  let service: CartsDetailsService;
  beforeEach(async () => {
    mockPrismaService = mockDeep<PrismaService>();
    variantsService = mockDeep<VariantsService>();
    mockCartService = mockDeep<CartService>();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CartsDetailsService,
        { provide: CartService, useValue: mockCartService },
        { provide: VariantsService, useValue: variantsService },
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<CartsDetailsService>(CartsDetailsService);
  });

  it('should Be defined', () => {
    expect(service).toBeDefined();
    expect(mockPrismaService).toBeDefined();
  });
  describe('addCartDetail', () => {
    it('should be called with', async () => {
      const cartsId = '0f5c8172-2c13-43c7-b47b-6d0111d307d1';
      mockPrismaService.cartDetails.create.mockResolvedValueOnce({
        id: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
        quantity: 3,
        price: 32.32,
        variant_id: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
        cart_id: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
      });
      const variantWithProductInfo = {
        product_id: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
        product: {
          name: 'sunflower',
          price: 32.32,
          active: true,
        },
      };

      mockCartService.getCartByUserID.mockResolvedValueOnce(cartsId);
      variantsService.getVariantWithProductInfo.mockResolvedValueOnce(
        variantWithProductInfo,
      );

      const data = {
        quantity: 3,
        price: 32.32,
        variant_id: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
        cart_id: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
      };
      const userId = 'f5c8172-2c13-43c7-b47b-6d0111d307d1';
      await service.addCartDetail(
        {
          variant_id: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
          quantity: 3,
        },
        userId,
      );
      expect(mockPrismaService.cartDetails.create).toHaveBeenCalledWith({
        data,
      });
    });
  });
  describe('getCartDetailByCartId', () => {
    it('should be called wih', async () => {
      const cartDetail: CartDetails[] = [
        {
          id: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
          quantity: 3,
          price: 32.32,
          variant_id: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
          cart_id: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
        },
      ];
      const cart_id = '0f5c8172-2c13-43c7-b47b-6d0111d307d1';
      mockPrismaService.cartDetails.findMany.mockResolvedValueOnce(cartDetail);

      expect(await service.getCartDetailByCartId(cart_id)).toStrictEqual(
        cartDetail,
      );
      expect(mockPrismaService.cartDetails.findMany).toHaveBeenCalledWith({
        where: {
          cart_id,
        },
      });
    });
  });
});
