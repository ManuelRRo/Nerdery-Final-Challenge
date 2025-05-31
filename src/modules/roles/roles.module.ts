import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { RoleService } from './roles.service';

@Module({ providers: [PrismaService, RoleService], exports: [RoleService] })
export class RolesModule {}
