import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { UsersService } from '../../users/users.service';
import { ContextWithUser, TokenPayload } from '../dtos/UserRole.dto';
import { AppService } from '../../app.service';

@Injectable()
export class GqlAuthGuard implements CanActivate {
  private readonly logger: Logger;

  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
    private readonly appService: AppService,
  ) {
    this.logger = new Logger(GqlAuthGuard.name);
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx =
      GqlExecutionContext.create(context).getContext<ContextWithUser>();

    const request = this.getRequest(context);
    const authorization = request.headers?.authorization;

    if (!authorization) {
      throw new UnauthorizedException('No token provided');
    }

    const token = authorization.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException('No token provided');
    }

    try {
      const tokenPayload = await this.jwtService.verifyAsync<TokenPayload>(
        token,
        {
          secret: this.appService.configJwtSecret(),
        },
      );

      const userWithRoles = await this.usersService.getUserWithRoles(
        tokenPayload.sub,
      );

      // Extract role names from the nested structure
      const roles =
        userWithRoles?.roles?.map((userRole) => userRole.roles.name) || [];

      ctx.user = {
        id: tokenPayload.sub,
        email: tokenPayload.email,
        roles,
      };

      this.logger.debug('User Context', ctx.user);
      return true;
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Invalid token';
      this.logger.debug(message);
      throw new UnauthorizedException('Invalid token');
    }
  }

  private getRequest(context: ExecutionContext): Request {
    if (context.getType() === 'http') {
      return context.switchToHttp().getRequest<Request>();
    }

    const gqlContext = GqlExecutionContext.create(context);
    return gqlContext.getContext<{ req: Request }>().req;
  }
}
