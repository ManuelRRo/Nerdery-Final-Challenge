import { Injectable } from '@nestjs/common';
import { Categories } from 'generated/prisma';
import { PrismaService } from 'src/common/modules/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private readonly prismaService: PrismaService) {}
  async categories(): Promise<Categories[]> {
    const categories = await this.prismaService.categories.findMany();
    return categories;
  }
}
