import { Injectable } from '@nestjs/common';
import { Brands } from 'generated/prisma';
import { PrismaService } from 'src/prisma.service';
import { CreateBrandInput } from './input/create-brand.input';
import { PaginationArgs } from 'src/common/args/pagination.args';

@Injectable()
export class BrandsService {
  constructor(private prisma: PrismaService) {}

  async brands(args: PaginationArgs): Promise<Brands[]> {
    return this.prisma.brands.findMany({
      skip: args.offset,
      take: args.limit,
    });
  }
  async getBrandById(brandId: string) {
    return this.prisma.brands.findFirst({
      where: {
        id: brandId,
      },
    });
  }

  async createBrand(input: CreateBrandInput) {
    return await this.prisma.brands.create({
      data: {
        ...input,
      },
    });
  }
}
