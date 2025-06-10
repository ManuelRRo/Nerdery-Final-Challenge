import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { SendGridClient } from './sendgrid-client';
import { PrismaService } from '../common/modules/prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { EmailService } from './email.service';
import { SendEmailDto } from './dtos/sendEmail.dto';
import { Users } from '../../generated/prisma';
import { AppService } from '../app.service';
import { ConfigService } from '@nestjs/config';

describe('Email Service', () => {
  let mockSendGridClient: DeepMockProxy<SendGridClient>;
  let mockPrismaService: DeepMockProxy<PrismaService>;
  let service: EmailService;
  beforeEach(async () => {
    mockPrismaService = mockDeep<PrismaService>();
    mockSendGridClient = mockDeep<SendGridClient>();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmailService,
        AppService,
        ConfigService,
        { provide: SendGridClient, useValue: mockSendGridClient },
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<EmailService>(EmailService);
    mockPrismaService.productCategories.findMany.mockClear();
  });
  const user: Users = {
    id: '0f5c8172-1b16-43c7-b47b-6d0111d789d1',
    nickname: 'jon',
    first_name: 'john',
    last_name: 'lennon',
    email: 'mail@mail.com',
    password: '2$@$@@$@@#@232',
  };
  it('should Be defined', () => {
    expect(mockPrismaService).toBeDefined();
    expect(mockSendGridClient).toBeDefined();
    expect(service);
  });

  describe('sendTestEmail', () => {
    it('should be call with mail', async () => {
      const sendMailDto: SendEmailDto = {
        recipient: user.email,
        body: 'Password Change',
      };
      const mail = {
        to: sendMailDto.recipient,
        from: 'manrico5670@gmail.com', //Approved sender ID in Sendgrid
        subject: 'Tshirt last products on sale Take It!',
        content: [{ type: 'text/html', value: sendMailDto.body }],
      };
      await service.sendTestEmail(sendMailDto);
      expect(
        mockSendGridClient.send.mockResolvedValueOnce(),
      ).toHaveBeenCalledWith(mail);
    });
  });
  describe('', () => {
    it('', async () => {});
  });
});
