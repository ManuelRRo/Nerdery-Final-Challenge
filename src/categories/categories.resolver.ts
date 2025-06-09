import { Query, Resolver } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { Categories } from './model/categories.model';

@Resolver(() => Categories)
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}
  @Query(() => [Categories], {
    name: 'Categories',
    description: 'Return all categories.',
  })
  getCategories() {
    return this.categoriesService.categories();
  }
}
