import { Test, TestingModule } from '@nestjs/testing';
import { AuthGuard } from './auth.guard';
import { JwtService } from '@nestjs/jwt';
import { AppService } from '../../app.service';
import { UnauthorizedException } from '@nestjs/common';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let jwtService: JwtService;
  let appService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthGuard,
        {
          provide: JwtService,
          useValue: {
            verifyAsync: jest.fn(),
          },
        },
        {
          provide: AppService,
          useValue: {
            configJwtSecret: jest.fn().mockReturnValue('test_secret'),
          },
        },
      ],
    }).compile();

    guard = module.get<AuthGuard>(AuthGuard);
    jwtService = module.get<JwtService>(JwtService);
    appService = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(guard).toBeDefined();
    expect(jwtService).toBeDefined();
  });

  describe('canActivate', () => {
    it('should throw UnauthorizedException if no Authorization header', async () => {
      const context: any = {
        switchToHttp: () => ({
          getRequest: () => ({
            headers: {},
          }),
        }),
      };

      await expect(guard.canActivate(context)).rejects.toThrow(
        UnauthorizedException,
      );
    });

    it('should throw UnauthorizedException with invalid token format', async () => {
      const context: any = {
        switchToHttp: () => ({
          getRequest: () => ({
            headers: {
              authorization: 'InvalidToken',
            },
          }),
        }),
      };

      await expect(guard.canActivate(context)).rejects.toThrow(
        UnauthorizedException,
      );
    });

    it('should validate token and attach user', async () => {
      const mockPayload = {
        sub: '0f5c8172-2c13-43c7-b47b-6d0111d307d1',
        email: 'test@example.com',
      };

      (jwtService.verifyAsync as jest.Mock).mockResolvedValue(mockPayload);

      const request: any = {
        headers: {
          authorization: 'Bearer valid.jwt.token',
        },
      };

      const context: any = {
        switchToHttp: () => ({
          getRequest: () => request,
        }),
      };

      const result = await guard.canActivate(context);

      expect(result).toBe(true);
      expect(request.user).toEqual({
        userId: mockPayload.sub,
        email: mockPayload.email,
      });
    });
  });
});
