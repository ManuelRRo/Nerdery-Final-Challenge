import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesResolver } from './likes.resolver';
import { PrismaService } from 'src/common/modules/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { AppService } from 'src/app.service';
import { EmailService } from '../email/email.service';
import { SendGridClient } from '../email/sendgrid-client';

@Module({
  providers: [
    LikesResolver,
    LikesService,
    PrismaService,
    JwtService,
    UsersService,
    AppService,
    EmailService,
    SendGridClient,
  ],
})
export class LikesModule {}
