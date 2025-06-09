import { Injectable } from '@nestjs/common';
import { GetProductQueryDto } from 'src/products/args/getProductQuery.args';

@Injectable()
export class PaginationService {
  public async paginateQuery<T extends ObjectLiteral>(
    paginationQueryDto: GetProductQueryDto,
    repository: T,
  ) {
    const count = await repository.aggregate({ _count: { id: true } });
    const totalItems = count._count.id;
    if (!paginationQueryDto.limit) {
      paginationQueryDto.limit = 10;
    }
    const totalPages = Math.ceil(count._count.id / paginationQueryDto.limit);

    const response = {
      meta: {
        itemsPerPage: paginationQueryDto.limit,
        totalItems,
        currentPage: paginationQueryDto.offset,
        totalPages,
      },
    };
    return response;
  }
}

export interface ObjectLiteral {
  [key: string]: any;
}
