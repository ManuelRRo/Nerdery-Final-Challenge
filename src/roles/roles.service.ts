import { Injectable } from '@nestjs/common';
import { Roles } from 'generated/prisma';
import { PrismaService } from '../common/modules/prisma/prisma.service';

@Injectable()
export class RoleService {
  constructor(private readonly prisma: PrismaService) {}
  async addUserRol(userId: string) {
    const rolClient = await this.getClientRole();
    if (!rolClient) {
      throw new Error('rol client does not exist');
    }
    await this.prisma.userRoles.create({
      data: { userId, roleId: rolClient?.id },
    });
  }

  async getClientRole(): Promise<Roles | null> {
    const defaultRoleName = 'Client';
    return await this.prisma.roles.findFirst({
      where: {
        name: defaultRoleName,
      },
    });
  }
}
