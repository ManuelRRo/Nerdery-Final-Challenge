import { Resolver } from '@nestjs/graphql';
import { TestingService } from './testing.service';

@Resolver()
export class TestingResolver {
  constructor(private readonly testingService: TestingService) {}
}
