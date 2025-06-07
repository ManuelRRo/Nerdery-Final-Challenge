import { Test, TestingModule } from '@nestjs/testing';
import { VariantsService } from './variants.service';
import { PrismaService } from '../common/modules/prisma/prisma.service';
import { Variants } from 'generated/prisma';

describe('VariantsService', () => {
  let service: VariantsService;
  let prisma: PrismaService;

  const mockPrismaService = {
    variants: {
      findUnique: jest.fn(),
      findMany: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VariantsService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<VariantsService>(VariantsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getVariantWithProductInfo', () => {
    it('should return variant with product info', async () => {
      const mockData = {
        product_id: '04416701-4774-4ea9-9b72-f75076dc750c',
        product: { name: 'Product 1', price: 100, active: true },
      };
      mockPrismaService.variants.findUnique.mockResolvedValue(mockData);

      const result = await service.getVariantWithProductInfo(
        '04416701-4774-4ea9-9b72-f75076dc7503',
      );
      expect(result).toEqual(mockData);
      expect(mockPrismaService.variants.findUnique).toHaveBeenCalledWith({
        where: { id: '04416701-4774-4ea9-9b72-f75076dc7503' },
        select: {
          product_id: true,
          product: {
            select: {
              name: true,
              price: true,
              active: true,
            },
          },
        },
      });
    });
  });

  describe('getVariantsByProductId', () => {
    it('should return variants by product ID', async () => {
      const mockVariants = [
        { id: '0f5c8172-1b16-43c7-b47b-307d11' },
        { id: '0f5c8172-1b16-43c7-b47b-307d12' },
      ] as Variants[];
      mockPrismaService.variants.findMany.mockResolvedValue(mockVariants);

      const result = await service.getVariantsByProductId(
        '0f5c8172-1b16-43c7-b47b-307d1',
      );
      expect(result).toEqual(mockVariants);
      expect(mockPrismaService.variants.findMany).toHaveBeenCalledWith({
        where: { product_id: '0f5c8172-1b16-43c7-b47b-307d1' },
      });
    });
  });

  describe('getVariantsByProductIdLoader', () => {
    it('should return variants by batch of product IDs', async () => {
      const mockVariants = [
        {
          id: '0f5c8172-1b16-43c7-b48b-307d1',
          product_id: '0f5c8172-1b16-43c7-b47b-307d1',
        },
        {
          id: '0k5c8172-1b16-43c7-b47b-307d1',
          product_id: '0f5c8172-1b16-43c7-b47b-30796',
        },
      ] as Variants[];

      mockPrismaService.variants.findMany.mockResolvedValue(mockVariants);

      const result = await service.getVariantsByProductIdLoader([
        '0f5c8172-1b16-43c7-b47b-307d1',
        '0f5c8172-1b16-43c7-b47b-30796',
      ]);
      expect(result).toEqual(mockVariants);
      expect(mockPrismaService.variants.findMany).toHaveBeenCalledWith({
        where: {
          product: {
            id: {
              in: [
                '0f5c8172-1b16-43c7-b47b-307d1',
                '0f5c8172-1b16-43c7-b47b-30796',
              ],
            },
          },
        },
      });
    });
  });

  describe('getVariantsProductsByBatch', () => {
    it('should return grouped variants by product ID', async () => {
      const mockVariants = [
        {
          id: '0f5c8172-1b16-43c7-b47b-307u7',
          product_id: '0f5c8172-1b16-43c7-b47b-307t5',
        },
        {
          id: '0f5c8172-1b16-43c7-b47b-30tyu',
          product_id: '8i9c8172-1b16-43c7-b47b-307d1',
        },
        {
          id: '0f5c8172-1b16-43c7-b47b-307v3',
          product_id: '0f5c8172-1b16-43c7-b47b-307t5',
        },
      ] as Variants[];

      jest
        .spyOn(service, 'getVariantsByProductIdLoader')
        .mockResolvedValue(mockVariants);

      const result = await service.getVariantsProductsByBatch([
        '0f5c8172-1b16-43c7-b47b-307t5',
        '8i9c8172-1b16-43c7-b47b-307d1',
      ]);
      expect(result).toEqual([
        [
          {
            id: '0f5c8172-1b16-43c7-b47b-307u7',
            product_id: '0f5c8172-1b16-43c7-b47b-307t5',
          },
          {
            id: '0f5c8172-1b16-43c7-b47b-307v3',
            product_id: '0f5c8172-1b16-43c7-b47b-307t5',
          },
        ],
        [
          {
            id: '0f5c8172-1b16-43c7-b47b-30tyu',
            product_id: '8i9c8172-1b16-43c7-b47b-307d1',
          },
        ],
      ]);
    });
  });

  describe('getVariantsWithStockThree', () => {
    it('should return variants with stock equal to 3', async () => {
      const mockVariants = [
        { id: '8i9c8172-1b16-43c7-b47b-307d2', stock: 3 },
      ] as any[];
      mockPrismaService.variants.findMany.mockResolvedValue(mockVariants);

      const result = await service.getVariantsWithStockThree(
        '8i9c8172-1b16-43c7-b47b-307d1',
      );
      expect(result).toEqual(mockVariants);
      expect(mockPrismaService.variants.findMany).toHaveBeenCalledWith({
        where: {
          product_id: '8i9c8172-1b16-43c7-b47b-307d1',
          stock: 3,
        },
        include: {
          product: true,
          file: true,
        },
      });
    });
  });

  describe('_mapResultToIds', () => {
    it('should group variants by product ID', () => {
      const productIds = [
        '8i9c8172-1b16-43c7-b47b-307d1111',
        '8i9c8172-1b16-43c7-b47b-307p2',
      ];
      const variants = [
        {
          id: '8i9c8172-1b16-43c7-b47b-307d11',
          product_id: '8i9c8172-1b16-43c7-b47b-307d1111',
        },
        {
          id: '8i9c8172-1b16-43c7-b47b-307v2',
          product_id: '8i9c8172-1b16-43c7-b47b-307p2',
        },
        {
          id: '8i9c8172-1b16-43c7-b47b-307v3',
          product_id: '8i9c8172-1b16-43c7-b47b-307d1111',
        },
      ] as Variants[];

      const result = service['_mapResultToIds'](productIds, variants);
      expect(result).toEqual([
        [
          {
            id: '8i9c8172-1b16-43c7-b47b-307d11',
            product_id: '8i9c8172-1b16-43c7-b47b-307d1111',
          },
          {
            id: '8i9c8172-1b16-43c7-b47b-307v3',
            product_id: '8i9c8172-1b16-43c7-b47b-307d1111',
          },
        ],
        [
          {
            id: '8i9c8172-1b16-43c7-b47b-307v2',
            product_id: '8i9c8172-1b16-43c7-b47b-307p2',
          },
        ],
      ]);
    });
  });
});
