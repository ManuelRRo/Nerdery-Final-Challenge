import { Test, TestingModule } from '@nestjs/testing';
import { BrandsService } from './brands.service';
import { PrismaService } from '../common/modules/prisma/prisma.service';
import { brands } from '../common/mocks/data';
import { BadRequestException, NotFoundException } from '@nestjs/common';

const mockPrismaService = {
  brands: {
    findMany: jest.fn(),
    create: jest.fn(),
    findFirst: jest.fn(),
  },
};

describe('BrandService', () => {
  let service: BrandsService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BrandsService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<BrandsService>(BrandsService);

    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should Be defined', () => {
    expect(service).toBeDefined();
    expect(prismaService).toBeDefined();
  });

  describe('brands', () => {
    it('Should return a list of brands with pagination', async () => {
      const mockBrands = brands;

      const paginationArgs = { offset: 0, limit: 10 };

      (prismaService.brands.findMany as jest.Mock).mockResolvedValue(
        mockBrands,
      );

      const result = await service.brands(paginationArgs);

      expect(result).toEqual(mockBrands);

      expect(mockPrismaService.brands.findMany).toHaveBeenCalledWith({
        skip: paginationArgs.offset,
        take: paginationArgs.limit,
      });
    });

    it('Should throw not found exception is db is empty ', async () => {
      const paginationArgs = { offset: 0, limit: 10 };

      mockPrismaService.brands.findMany.mockResolvedValue(null);

      await expect(service.brands(paginationArgs)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw BadRequestException when offset is negative', async () => {
      const invalidArgs = { offset: -1, limit: 10 };

      await expect(service.brands(invalidArgs)).rejects.toThrow(
        BadRequestException,
      );
    });
  });

  describe('getBrandById', () => {
    const brandId = '0f5c8172-1b16-43c7-b47b-307d1';
    it('Should throw not found exception is not found', async () => {
      mockPrismaService.brands.findFirst.mockResolvedValue(null);
      await expect(service.getBrandById(brandId)).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
