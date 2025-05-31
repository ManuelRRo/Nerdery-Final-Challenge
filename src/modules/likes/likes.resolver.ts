import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LikesService } from './likes.service';
import { Likes } from 'src/modules/likes/model/likes.model';
import { Roles } from 'src/common/decorators/role.decorator';
import { ROLES } from 'src/common/enums/roles.enum';
import { UseFilters, UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { GqlAuthGuard } from 'src/common/guards/gql-auth.guard';
import { LikeInput } from './inputs/like.input';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { GraphQLExceptionsFilter } from 'src/common/filters/gql-exception.filter';
@Resolver(() => Likes)
@UseFilters(GraphQLExceptionsFilter)
export class LikesResolver {
  constructor(private readonly likesService: LikesService) {}

  @UseGuards(GqlAuthGuard, RolesGuard)
  @Mutation(() => Likes, { name: 'likeProduct' })
  @Roles(ROLES.CLIENT)
  async likedProduct(
    @Args('input') input: LikeInput,
    @CurrentUser() user_id: string,
  ): Promise<Likes | []> {
    return this.likesService.likedProduct(input, user_id);
  }
}
