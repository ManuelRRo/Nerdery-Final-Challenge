import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesResolver } from './likes.resolver';
import { PrismaService } from 'src/common/modules/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AppService } from 'src/app.service';
import { EmailService } from '../email/email.service';
import { SendGridClient } from '../email/sendgrid-client';
import { UsersModule } from 'src/users/users.module';

@Module({
  providers: [
    LikesResolver,
    LikesService,
    PrismaService,
    JwtService,
    AppService,
    EmailService,
    SendGridClient,
  ],
  imports: [UsersModule],
})
export class LikesModule {}
