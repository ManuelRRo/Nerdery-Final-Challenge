import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesResolver } from './categories.resolver';
import { PrismaModule } from 'src/common/modules/prisma/prisma.module';

@Module({
  providers: [CategoriesResolver, CategoriesService],
  imports: [PrismaModule],
})
export class CategoriesModule {}
