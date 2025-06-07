import { Test, TestingModule } from '@nestjs/testing';
import { ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { AppService } from '../../app.service';
import { UsersService } from '../../users/users.service';
import { GqlAuthGuard } from './gql-auth.guard';

describe('GqlAuthGuard', () => {
  let guard: GqlAuthGuard;
  let jwtService: JwtService;
  let usersService: UsersService;
  let appService: AppService;

  const mockExecutionContext = (
    headers: Record<string, string>,
    gqlContext = true,
  ) => {
    return {
      getType: jest.fn().mockReturnValue(gqlContext ? 'graphql' : 'http'),
      switchToHttp: jest.fn().mockReturnValue({
        getRequest: jest.fn().mockReturnValue({
          headers,
        }),
      }),
      getHandler: jest.fn(),
      getClass: jest.fn(),
    } as unknown as ExecutionContext;
  };

  const mockGqlExecutionContext = (req: any) => {
    return {
      getContext: jest.fn().mockReturnValue({ req }),
    };
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GqlAuthGuard,
        {
          provide: JwtService,
          useValue: {
            verifyAsync: jest.fn(),
          },
        },
        {
          provide: UsersService,
          useValue: {
            getUserWithRoles: jest.fn(),
          },
        },
        {
          provide: AppService,
          useValue: {
            configJwtSecret: jest.fn().mockReturnValue('test-secret'),
          },
        },
      ],
    }).compile();

    guard = module.get<GqlAuthGuard>(GqlAuthGuard);
    jwtService = module.get<JwtService>(JwtService);
    usersService = module.get<UsersService>(UsersService);
    appService = module.get<AppService>(AppService);

    // Mock GqlExecutionContext
    jest
      .spyOn(GqlExecutionContext, 'create')
      .mockImplementation(
        () => mockGqlExecutionContext({ headers: {} }) as any,
      );
  });

  it('should be defined', () => {
    expect(guard).toBeDefined();
    expect(jwtService).toBeDefined();
    expect(usersService).toBeDefined();
    expect(appService).toBeDefined();
  });

  describe('canActivate', () => {
    it('should throw UnauthorizedException if no token provided', async () => {
      const context = mockExecutionContext({});
      await expect(guard.canActivate(context)).rejects.toThrow(
        UnauthorizedException,
      );
    });

    it('should throw UnauthorizedException if invalid token scheme', async () => {
      const context = mockExecutionContext({
        authorization: 'InvalidScheme token',
      });
      await expect(guard.canActivate(context)).rejects.toThrow(
        UnauthorizedException,
      );
    });

    it('should throw UnauthorizedException if token verification fails', async () => {
      const context = mockExecutionContext({
        authorization: 'Bearer invalid-token',
      });
      jest
        .spyOn(jwtService, 'verifyAsync')
        .mockRejectedValue(new Error('Invalid token'));

      await expect(guard.canActivate(context)).rejects.toThrow(
        UnauthorizedException,
      );
    });
  });

  describe('getRequest', () => {
    it('should return request from http context', () => {
      const httpContext = {
        getType: jest.fn().mockReturnValue('http'),
        switchToHttp: jest.fn().mockReturnValue({
          getRequest: jest.fn().mockReturnValue({ headers: {} }),
        }),
      } as unknown as ExecutionContext;

      const request = guard['getRequest'](httpContext);
      expect(request).toBeDefined();
    });

    it('should return request from graphql context', () => {
      const gqlContext = {
        getType: jest.fn().mockReturnValue('graphql'),
        getContext: jest.fn().mockReturnValue({ req: { headers: {} } }),
      } as unknown as ExecutionContext;

      const request = guard['getRequest'](gqlContext);
      expect(request).toBeDefined();
    });
  });
});
