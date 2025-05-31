import { Resolver } from '@nestjs/graphql';
import { ProductCategoriesService } from './product-categories.service';

@Resolver()
export class ProductCategoriesResolver {
  constructor(
    private readonly productCategoriesService: ProductCategoriesService,
  ) {}
}
