import { Module } from '@nestjs/common';
import { VariantsService } from './variants.service';
import { VariantsResolver } from './variants.resolver';
import { PrismaModule } from 'src/common/modules/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [VariantsResolver, VariantsService],
  exports: [VariantsService],
})
export class VariantsModule {}
