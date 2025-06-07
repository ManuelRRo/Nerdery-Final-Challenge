import { Test, TestingModule } from '@nestjs/testing';
import DataLoader from 'dataloader';
import { DataLoaderService } from './dataloader.service';
import { VariantsService } from '../../../variants/variants.service';
import { IDataLoaders } from './dataloader.interface';
import { Size, TextColor, Variants } from '../../../../generated/prisma';

describe('DataLoaderService', () => {
  let service: DataLoaderService;
  let mockVariantsService: jest.Mocked<VariantsService>;

  const mockVariants = [
    {
      id: '7930c597-29d1-4077-bcb9-e1d7a347b679',
      product_id: '16686134-d385-45bf-aa3a-a5ce3d7fae72',
      file_id: '38485ebe-5d67-47c0-9fc9-f2d3d4b91dde',
      size: Size.SMALL,
      textColor: TextColor.BLUE,
      rgb: '000000',
      stock: 10,
      createdAt: new Date('2023-01-15T09:00:00.000Z'),
      updatedAt: new Date('2023-01-15T09:00:00.000Z'),
    },
    {
      id: '876537ec-21fe-470f-9b24-c68278730556',
      product_id: '16686134-d385-45bf-aa3a-a5ce3d7fae72',
      file_id: '38485ebe-5d67-47c0-9fc9-f2d3d4b91dde',
      size: Size.LARGE,
      textColor: TextColor.BLUE,
      rgb: '000000',
      stock: 12,
      createdAt: new Date('2023-01-15T09:00:00.000Z'),
      updatedAt: new Date('2023-01-15T09:00:00.000Z'),
    },
  ];

  beforeEach(async () => {
    mockVariantsService = {
      getVariantsProductsByBatch: jest.fn(),
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DataLoaderService,
        {
          provide: VariantsService,
          useValue: mockVariantsService,
        },
      ],
    }).compile();

    service = module.get<DataLoaderService>(DataLoaderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getLoaders', () => {
    it('should return an object with variantsLoader', () => {
      const loaders = service.getLoaders();
      expect(loaders).toHaveProperty('variantsLoader');
      expect(loaders.variantsLoader).toBeInstanceOf(DataLoader);
    });
  });

  describe('createVariantsLoader', () => {
    it('should create a DataLoader instance', () => {
      const loader = service.createVariantsLoader();
      expect(loader).toBeInstanceOf(DataLoader);
    });

    it('should call variantsService.getVariantsProductsByBatch with correct keys', async () => {
      const productId = '16686134-d385-45bf-aa3a-a5ce3d7fae72';
      mockVariantsService.getVariantsProductsByBatch.mockResolvedValue([
        mockVariants,
      ]);

      const loader = service.createVariantsLoader();
      const result = await loader.load(productId);

      expect(
        mockVariantsService.getVariantsProductsByBatch,
      ).toHaveBeenCalledWith([productId]);
      expect(result).toEqual(mockVariants);
    });
  });

  it('should cache repeated requests', async () => {
    const productId = '16686134-d385-45bf-aa3a-a5ce3d7fae72';
    mockVariantsService.getVariantsProductsByBatch.mockResolvedValue([
      mockVariants,
    ]);

    const loader = service.createVariantsLoader();
    const result1 = await loader.load(productId);
    const result2 = await loader.load(productId);

    expect(
      mockVariantsService.getVariantsProductsByBatch,
    ).toHaveBeenCalledTimes(1);
    expect(result1).toEqual(mockVariants);
    expect(result2).toEqual(mockVariants);
  });

  it('should handle empty results', async () => {
    const productId = '16686134-d385-45bf-aa3a-a5ce3d7f8966';
    mockVariantsService.getVariantsProductsByBatch.mockResolvedValue([[]]);

    const loader = service.createVariantsLoader();
    const result = await loader.load(productId);

    expect(mockVariantsService.getVariantsProductsByBatch).toHaveBeenCalledWith(
      [productId],
    );
    expect(result).toEqual([]);
  });
});
