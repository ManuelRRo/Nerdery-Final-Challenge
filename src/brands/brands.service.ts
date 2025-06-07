import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Brands } from 'generated/prisma';
import { CreateBrandInput } from './input/create-brand.input';
import { PaginationArgs } from 'src/common/args/pagination.args';
import { PrismaService } from '../common/modules/prisma/prisma.service';

@Injectable()
export class BrandsService {
  constructor(private prisma: PrismaService) {}

  async brands(args: PaginationArgs): Promise<Brands[]> {
    const { offset } = args;
    if (offset < 0) {
      throw new BadRequestException('offset can no be negative');
    }

    const brands = await this.prisma.brands.findMany({
      skip: args.offset,
      take: args.limit,
    });

    if (!brands) {
      throw new NotFoundException('Brands not found');
    }

    return brands;
  }
  async getBrandById(brandId: string) {
    const brand = await this.prisma.brands.findFirst({
      where: {
        id: brandId,
      },
    });

    if (!brand) {
      throw new NotFoundException('Brand not found');
    }

    return brand;
  }

  async createBrand(input: CreateBrandInput) {
    return await this.prisma.brands.create({
      data: {
        ...input,
      },
    });
  }
}
