import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { JwtService } from '@nestjs/jwt';
import { AppService } from 'src/app.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [FilesController],
  providers: [FilesService, JwtService, AppService, PrismaService],
})
export class FilesModule {}
