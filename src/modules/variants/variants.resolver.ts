import { Resolver } from '@nestjs/graphql';
import { VariantsService } from './variants.service';

@Resolver()
export class VariantsResolver {
  constructor(private readonly variantsService: VariantsService) {}
}
