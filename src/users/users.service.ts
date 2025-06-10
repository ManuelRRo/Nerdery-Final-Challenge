import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/modules/prisma/prisma.service';
import { EmailService } from '../email/email.service';
import { SendEmailDto } from '../email/dtos/sendEmail.dto';
import { SignUpDto } from '../auth/dtos/SignUp.dto';
import { RoleService } from '../roles/roles.service';
import { CartService } from '../carts/carts.service';

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
    private readonly rolesService: RoleService,
    private readonly cartService: CartService,
  ) {}

  async findByUserByName(email: string): Promise<User | null> {
    const user = await this.prisma.users.findUnique({
      where: {
        email,
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
            roles: true,
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

  async createUser(input: SignUpDto) {
    const user = await this.findByUserByName(input.email);
    if (user) {
      throw new Error(`There is a User Registered with ${input.email}`);
    }
    const newUser = await this.prisma.users.create({
      data: {
        first_name: input.firstName,
        last_name: input.lastName,
        email: input.email,
        password: input.password,
        nickname: input.nickname,
      },
    });

    await this.rolesService.addUserRol(newUser.id);

    await this.cartService.createCarts(newUser.id);
  }
}
