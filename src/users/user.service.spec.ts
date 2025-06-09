import { Test, TestingModule } from '@nestjs/testing';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { PrismaService } from '../common/modules/prisma/prisma.service';
import { UsersService } from './users.service';
import { EmailService } from '../email/email.service';
import { SendGridClient } from '../email/sendgrid-client';
import { AppService } from '../app.service';
import { ConfigService } from '@nestjs/config';
import { Users } from '../../generated/prisma';
import { SendEmailDto } from '../email/dtos/sendEmail.dto';
import { RoleService } from '../roles/roles.service';

describe('', () => {
  let mockPrismaService: DeepMockProxy<PrismaService>;
  let mockEmailService: DeepMockProxy<EmailService>;
  let service: UsersService;
  beforeEach(async () => {
    mockPrismaService = mockDeep<PrismaService>();
    mockEmailService = mockDeep<EmailService>();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: EmailService, useValue: mockEmailService },
        SendGridClient,
        AppService,
        ConfigService,
        RoleService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    mockPrismaService.payments.findUnique.mockClear();
  });
  const user: Users = {
    id: '0f5c8172-1b16-43c7-b47b-6d0111d789d1',
    nickname: 'jon',
    first_name: 'john',
    last_name: 'lennon',
    email: 'mail@mail.com',
    password: '2$@$@@$@@#@232',
  };
  const userUdpated: Users = {
    id: '0f5c8172-1b16-43c7-b47b-6d0111d789d1',
    nickname: 'jon',
    first_name: 'john',
    last_name: 'lennon',
    email: 'mail@mail.com',
    password: '2$@$@@$@@#@789',
  };

  it('should Be defined', () => {
    expect(service).toBeDefined();
    expect(mockPrismaService).toBeDefined();
  });

  describe('findByUserByName', () => {
    it('should be called with', async () => {
      const user: Users = {
        id: '0f5c8172-1b16-43c7-b47b-6d0111d789d1',
        nickname: 'jon',
        first_name: 'john',
        last_name: 'lennon',
        email: 'mail@mail.com',
        password: '2$@$@@$@@#@232',
      };
      const email = 'mail@mail.com';
      mockPrismaService.users.findUnique.mockResolvedValueOnce(user);

      await service.findByUserByName(email);

      expect(mockPrismaService.users.findUnique).toHaveBeenCalledWith({
        where: {
          email,
        },
        select: {
          id: true,
          email: true,
          password: true,
        },
      });
    });
  });
  describe('getUserWithRoles', () => {
    it('should be called with', async () => {
      const id = '0f5c8172-1b16-43c7-b47b-6d0111d789d1';
      mockPrismaService.users.findUnique.mockResolvedValueOnce(user);
      await service.getUserWithRoles(id);

      expect(mockPrismaService.users.findUnique).toHaveBeenCalledWith({
        where: { id },
        select: {
          roles: {
            select: {
              roles: true, // Include the roles relation
            },
          },
        },
      });
    });
  });

  describe('updatePassword', () => {
    it('should throw an error if user not found', async () => {
      const id = '0f5c8172-1b16-43c7-b47b-6d0111d789d1';
      const password = '2$@$@@$@@#@232';
      jest.spyOn(service, 'findByUserByName').mockResolvedValueOnce(null);
      const result = service.updatePassword(id, password);

      await expect(result).rejects.toThrow(Error);
    });
    it('should throw an error if user not found', async () => {
      const id = '0f5c8172-1b16-43c7-b47b-6d0111d789d1';
      const password = '2$@$@@$@@#@232';
      const sendMailDto: SendEmailDto = {
        recipient: user.email,
        body: 'Password Change',
      };
      jest.spyOn(service, 'findByUserByName').mockResolvedValueOnce(user);
      mockPrismaService.users.update.mockResolvedValueOnce(userUdpated);
      mockEmailService.sendTestEmail.mockResolvedValueOnce();
      const result = await service.updatePassword(id, password);
      expect(mockEmailService.sendTestEmail).toHaveBeenCalledWith(sendMailDto);
    });
  });
});
