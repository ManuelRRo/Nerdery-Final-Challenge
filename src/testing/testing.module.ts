import { Module } from '@nestjs/common';
import { TestingService } from './testing.service';
import { TestingResolver } from './testing.resolver';

@Module({
  providers: [TestingResolver, TestingService],
})
export class TestingModule {}
