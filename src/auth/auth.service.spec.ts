import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';
type AuthInput = { email: string; password: string };
const fakeToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5YTAyNmQ4Yy05MjY0LTRhMmYtYjhjMC1mZDU4MjAwZDU1YjgiLCJlbWFpbCI6ImpvaG4uZG9lQGV4YW1wbGUuY29tIiwiaWF0IjoxNzQ4OTg3NTk3LCJleHAiOjE3NDg5ODkzOTd9.sMJh9BUhPzeCnEqxz-ISMcqMbBY4T3zu7p2Ws-FA5we';
const fakeBadAuthInput = {
  email: '.doe@example.com',
  password: '$2a$10$xJwL5v5Jz5z5z5z5z5z5zO',
};
const fakeGoodAuthInput = {
  email: '.doe@example.com',
  password: '$2a$10$xJwL5v5Jz5z5z5z5z5z5zO',
};
const mockUserService = {
  findByUserByName: jest.fn(),
  updatePassword: jest.fn(),
};

const mockJwtService = {
  signAsync: jest.fn(),
};

const mockAuthService = {
  validateUser: jest.fn(),
};

describe('AuthService', () => {
  let service: AuthService;
  let userService: UsersService;
  let jwtService: JwtService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: mockUserService },
        { provide: JwtService, useValue: mockJwtService },
      ],
    }).compile();
    service = module.get<AuthService>(AuthService);
    userService = module.get<UsersService>(UsersService);
    jwtService = module.get<JwtService>(JwtService);
  });
  it('should Be defined', () => {
    expect(service).toBeDefined();
    expect(userService).toBeDefined();
    expect(jwtService).toBeDefined();
  });

  describe('authenticate', () => {
    it('Should throw UnauthorizedExeception if user is null', async () => {
      await expect(service.authenticate(fakeBadAuthInput)).rejects.toThrow(
        UnauthorizedException,
      );
    });
  });
  describe('validateUser', () => {});
  describe('signIn', () => {});
  describe('sendTokenToChangePassword', () => {});
  describe('resetPassword', () => {});
});
