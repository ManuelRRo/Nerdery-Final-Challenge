import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/modules/prisma/prisma.service';
import { EmailService } from '../email/email.service';
import { SendEmailDto } from '../email/dtos/sendEmail.dto';

export type User = {
  id: string;
  email: string;
  password: string;
};

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly emailService: EmailService,
  ) {}
  // eslint-disable-next-line @typescript-eslint/require-await
  async findByUserByName(email: string): Promise<User | null> {
    const user = await this.prisma.users.findUnique({
      where: {
        email, // Your email variable here
      },
      select: {
        id: true,
        email: true,
        password: true,
      },
    });

    return user;
  }

  async getUserWithRoles(id: string) {
    const userWithRoles = await this.prisma.users.findUnique({
      where: { id },
      select: {
        roles: {
          select: {
            roles: true, // Include the roles relation
          },
        },
      },
    });

    return userWithRoles;
  }

  async updatePassword(id: string, password: string) {
    const user = await this.findByUserByName(id);
    if (!user) {
      throw new Error('user not found');
    }

    user.password = password;

    const update = await this.prisma.users.update({
      where: { id: user.id },
      data: { password },
    });

    if (!update) {
      return;
    }

    const sendMailDto: SendEmailDto = {
      recipient: user.email,
      body: 'Password Change',
    };

    await this.emailService.sendTestEmail(sendMailDto);
  }
}
