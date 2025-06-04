import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';
import { SignInData } from 'src/common/dtos/UserRole.dto';
const fakeToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5YTAyNmQ4Yy05MjY0LTRhMmYtYjhjMC1mZDU4MjAwZDU1YjgiLCJlbWFpbCI6ImpvaG4uZG9lQGV4YW1wbGUuY29tIiwiaWF0IjoxNzQ4OTg3NTk3LCJleHAiOjE3NDg5ODkzOTd9.sMJh9BUhPzeCnEqxz-ISMcqMbBY4T3zu7p2Ws-FA5we';
const fakeBadAuthInput = {
  email: '.doe@example.com',
  password: '$2a$10$xJwL5v5Jz5z5z5z5z5z5zO',
};
const fakeGoodLogin = {
  email: 'john.doe@example.com',
  password: '$2a$10$xJwL5v5Jz5z5z5z5z5z5zO',
};
const mockUserService = {
  findByUserByName: jest.fn(),
  updatePassword: jest.fn(),
};

const mockJwtService = {
  signAsync: jest.fn(),
};

const signInData: SignInData = {
  userId: '0f5c8172-1b16-43c7-b47b-6d0111d307d1',
  email: 'john.doe@example.com',
};

export type User = {
  id: string;
  email: string;
  password: string;
};

const logUser: User = {
  id: '0f5c8172-1b16-43c7-b47b-6d0111d307d1',
  email: 'john.doe@example.com',
  password: '$2a$10$xJwL5v5Jz5z5z5z5z5z5zO',
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
      mockUserService.findByUserByName.mockResolvedValueOnce(null);
      await service.validateUser(fakeBadAuthInput);
      const result = service.authenticate(fakeBadAuthInput);
      await expect(result).rejects.toThrow(UnauthorizedException);
    });
  });
  describe('validateUser', () => {
    it('see what expected', async () => {
      //mock data
      mockUserService.findByUserByName.mockResolvedValueOnce(logUser);

      //Act
      const result = await service.validateUser(fakeGoodLogin);

      //Assert
      expect(result).toStrictEqual(signInData);
    });
  });
  describe('signIn', () => {
    it('Should retun a valid token', async () => {
      //mock data
      mockJwtService.signAsync.mockResolvedValueOnce(fakeToken);

      //Act
      const result = await service.signIn(signInData);

      //Asserts
      expect(result).toStrictEqual(
        expect.objectContaining({ sessionToken: fakeToken }),
      );
    });
  });
  describe('sendTokenToChangePassword', () => {});
  describe('resetPassword', () => {});
});
