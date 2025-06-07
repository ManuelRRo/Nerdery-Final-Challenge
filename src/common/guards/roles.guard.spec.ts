import { Test, TestingModule } from '@nestjs/testing';
import { Reflector } from '@nestjs/core';
import { ExecutionContext, ForbiddenException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ROLES } from '../enums/roles.enum';
import { RolesGuard } from './roles.guard';
import { AuthenticatedUserDto } from '../dtos/UserRole.dto';

describe('RolesGuard', () => {
  let guard: RolesGuard;
  let reflector: Reflector;

  const mockManagerUser: AuthenticatedUserDto = {
    id: '0417dcba-46cc-4987-86f7-e67050effbc2',
    email: 'manager@example.com',
    roles: ROLES.MANAGER,
  };

  const mockClientUser: AuthenticatedUserDto = {
    id: '0417dcba-46cc-4987-86f7-e67050effbc3',
    email: 'client@example.com',
    roles: ROLES.CLIENT,
  };

  const mockContext = {
    getHandler: jest.fn(),
    getClass: jest.fn(),
  };

  const createMockGqlContext = (user: AuthenticatedUserDto | null) => ({
    getContext: jest.fn().mockReturnValue({ user }),
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RolesGuard,
        {
          provide: Reflector,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    guard = module.get<RolesGuard>(RolesGuard);
    reflector = module.get<Reflector>(Reflector);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(guard).toBeDefined();
    expect(reflector).toBeDefined();
  });

  describe('canActivate', () => {
    it('should return true when no roles are required', () => {
      jest.spyOn(reflector, 'get').mockReturnValue(undefined);
      jest
        .spyOn(GqlExecutionContext, 'create')
        .mockReturnValue(createMockGqlContext(mockManagerUser) as any);

      expect(
        guard.canActivate(mockContext as unknown as ExecutionContext),
      ).toBe(true);
    });

    it('should throw ForbiddenException when user is not authenticated', () => {
      jest.spyOn(reflector, 'get').mockReturnValue([ROLES.MANAGER]);
      jest
        .spyOn(GqlExecutionContext, 'create')
        .mockReturnValue(createMockGqlContext(null) as any);

      expect(() =>
        guard.canActivate(mockContext as unknown as ExecutionContext),
      ).toThrow(ForbiddenException);
    });

    describe('Manager access', () => {
      it('should allow access when Manager role is required and user has it', () => {
        jest.spyOn(reflector, 'get').mockReturnValue([ROLES.MANAGER]);
        jest
          .spyOn(GqlExecutionContext, 'create')
          .mockReturnValue(createMockGqlContext(mockManagerUser) as any);

        expect(
          guard.canActivate(mockContext as unknown as ExecutionContext),
        ).toBe(true);
      });

      it('should deny access when Manager role is required but user has Client role', () => {
        jest.spyOn(reflector, 'get').mockReturnValue([ROLES.MANAGER]);
        jest
          .spyOn(GqlExecutionContext, 'create')
          .mockReturnValue(createMockGqlContext(mockClientUser) as any);

        expect(() =>
          guard.canActivate(mockContext as unknown as ExecutionContext),
        ).toThrow(ForbiddenException);
      });
    });

    describe('Client access', () => {
      it('should allow access when Client role is required and user has it', () => {
        jest.spyOn(reflector, 'get').mockReturnValue([ROLES.CLIENT]);
        jest
          .spyOn(GqlExecutionContext, 'create')
          .mockReturnValue(createMockGqlContext(mockClientUser) as any);

        expect(
          guard.canActivate(mockContext as unknown as ExecutionContext),
        ).toBe(true);
      });

      it('should deny access when Client role is required but user has Manager role', () => {
        jest.spyOn(reflector, 'get').mockReturnValue([ROLES.CLIENT]);
        jest
          .spyOn(GqlExecutionContext, 'create')
          .mockReturnValue(createMockGqlContext(mockManagerUser) as any);

        expect(() =>
          guard.canActivate(mockContext as unknown as ExecutionContext),
        ).toThrow(ForbiddenException);
      });
    });

    it('should allow access when either role is acceptable', () => {
      jest
        .spyOn(reflector, 'get')
        .mockReturnValue([ROLES.MANAGER, ROLES.CLIENT]);

      // Test with Manager
      jest
        .spyOn(GqlExecutionContext, 'create')
        .mockReturnValue(createMockGqlContext(mockManagerUser) as any);
      expect(
        guard.canActivate(mockContext as unknown as ExecutionContext),
      ).toBe(true);

      // Test with Client
      jest
        .spyOn(GqlExecutionContext, 'create')
        .mockReturnValue(createMockGqlContext(mockClientUser) as any);
      expect(
        guard.canActivate(mockContext as unknown as ExecutionContext),
      ).toBe(true);
    });

    it('should include required roles in the error message', () => {
      jest.spyOn(reflector, 'get').mockReturnValue([ROLES.MANAGER]);
      jest
        .spyOn(GqlExecutionContext, 'create')
        .mockReturnValue(createMockGqlContext(mockClientUser) as any);

      expect(() =>
        guard.canActivate(mockContext as unknown as ExecutionContext),
      ).toThrowError(`Required roles: ${ROLES.MANAGER}`);
    });
  });
});
