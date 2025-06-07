import { PaginationService, ObjectLiteral } from './pagination.service';
import { GetProductQueryDto } from 'src/products/args/getProductQuery.args';

describe('PaginationService', () => {
  let service: PaginationService;

  beforeEach(() => {
    service = new PaginationService();
  });

  it('should return correct pagination meta data', async () => {
    const paginationQueryDto: GetProductQueryDto = {
      limit: 10,
      offset: 1,
    };

    const mockRepository: ObjectLiteral = {
      aggregate: jest.fn().mockResolvedValue({
        _count: {
          id: 25,
        },
      }),
    };

    const result = await service.paginateQuery(
      paginationQueryDto,
      mockRepository,
    );

    expect(mockRepository.aggregate).toHaveBeenCalledWith({
      _count: { id: true },
    });
    expect(result).toEqual({
      meta: {
        itemsPerPage: 10,
        totalItems: 25,
        currentPage: 1,
        totalPages: 3,
      },
    });
  });
});
