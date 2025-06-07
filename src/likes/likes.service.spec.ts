import { Test, TestingModule } from '@nestjs/testing';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { PrismaService } from '../common/modules/prisma/prisma.service';
import { LikesService } from './likes.service';
import { LikeInput } from './inputs/like.input';
import { Likes, Prisma } from '../../generated/prisma';

describe('Likes Service', () => {
  let mockPrismaService: DeepMockProxy<PrismaService>;
  let service: LikesService;

  beforeEach(async () => {
    mockPrismaService = mockDeep<PrismaService>();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LikesService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<LikesService>(LikesService);
    mockPrismaService.productCategories.findMany.mockClear();
  });
  //Like input
  const likeInput: LikeInput = {
    productId: '14fb24f4-46af-414c-9d4f-519d33484092',
  };
  //user_id
  const user_id = '9a026d8c-9264-4a2f-b8c0-fd58200d55b8';
  //Like model prisma
  const like: Likes = {
    productId: likeInput.productId,
    user_id,
    createdAt: new Date(),
  };
  //LikesWhereInput
  const query: Prisma.LikesWhereInput = {
    productId: likeInput.productId,
    user: {
      orders: {
        none: {
          orderDetails: {
            some: {
              variants: {
                product_id: likeInput.productId,
              },
            },
          },
        },
      },
    },
  };
  it('should Be defined', () => {
    expect(service).toBeDefined();
    expect(mockPrismaService).toBeDefined();
  });

  describe('likedProduct', () => {
    it('Like a product if exist', async () => {
      mockPrismaService.likes.create.mockResolvedValueOnce(like);

      await service.likedProduct(likeInput, user_id);

      expect(mockPrismaService.likes.create).toHaveBeenCalledWith({
        data: {
          productId: likeInput.productId,
          user_id,
        },
      });
    });
  });

  describe('getLastLikeByProductId', () => {
    it('should return like product', async () => {
      mockPrismaService.likes.findFirst.mockResolvedValueOnce(like);

      //Act
      const result = await service.getLastLikeByProductId(like.productId);

      //Assert
      expect(mockPrismaService.likes.findFirst).toHaveBeenCalledWith({
        where: query,
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          user: true,
          products: {
            include: {
              variants: {
                include: {
                  file: true,
                },
              },
              brand: true,
            },
          },
        },
      });
    });
  });
});
