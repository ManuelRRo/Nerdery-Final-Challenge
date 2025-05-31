import {
  Resolver,
  Query,
  ResolveField,
  Parent,
  Args,
  Mutation,
} from '@nestjs/graphql';
import { BrandsService } from './brands.service';
import { ProductsService } from 'src/modules/products/products.service';
import { CreateBrandInput } from './input/create-brand.input';
import { Products } from 'src/modules/products/model/products.model';
import { Brand } from 'src/modules/brands/model/brand.model';
import { PaginationArgs } from 'src/common/args/pagination.args';
import { UseFilters, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/common/guards/gql-auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/role.decorator';
import { ROLES } from 'src/common/enums/roles.enum';
import { GraphQLExceptionsFilter } from 'src/common/filters/gql-exception.filter';
//import { Roles } from 'src/common/decorators/role.decorator';

@Resolver(() => Brand)
@UseFilters(GraphQLExceptionsFilter)
export class BrandsResolver {
  constructor(
    private readonly brandsService: BrandsService,
    private productsService: ProductsService,
  ) {}

  @Query(() => [Brand], { name: 'brands' })
  getBrands(@Args() args: PaginationArgs) {
    return this.brandsService.brands(args);
  }

  @Query(() => Brand, { name: 'brand' })
  async getBrandById(@Args('id') id: string) {
    return this.brandsService.getBrandById(id);
  }

  @UseGuards(GqlAuthGuard, RolesGuard)
  @Mutation(() => Brand, { name: 'newBrand' })
  @Roles(ROLES.MANAGER)
  createBrand(@Args('input') input: CreateBrandInput) {
    return this.brandsService.createBrand(input);
  }

  @ResolveField(() => [Products])
  products(@Parent() brand: Brand, @Args() args: PaginationArgs) {
    return this.productsService.getProductsByBrandId(brand.id, args);
  }
}
