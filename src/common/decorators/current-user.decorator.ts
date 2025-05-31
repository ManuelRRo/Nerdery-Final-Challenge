import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Request } from 'express';
import { ContextWithUser, TokenPayload } from '../dtos/UserRole.dto';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    // Handle GraphQL context
    if (context.getType<string>() === 'graphql') {
      const ctx =
        GqlExecutionContext.create(context).getContext<ContextWithUser>();
      if (!ctx.user) {
        throw new Error(
          'CurrentUser decorator requires GqlAuthGuard to be used first',
        );
      }
      return ctx.user;
    }

    // Handle HTTP/REST context
    const request = context
      .switchToHttp()
      .getRequest<Request & { user?: any }>();
    if (!request.user) {
      throw new Error(
        'CurrentUser decorator requires AuthGuard to be used first',
      );
    }

    return request.user;
  },
);
