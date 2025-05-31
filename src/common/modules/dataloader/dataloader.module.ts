import { Module } from '@nestjs/common';
import { DataLoaderService } from './dataloader.service';
import { VariantsModule } from 'src/variants/variants.module';

@Module({
  providers: [DataLoaderService],
  exports: [DataLoaderService],
  imports: [VariantsModule],
})
export class DataloaderModule {}
