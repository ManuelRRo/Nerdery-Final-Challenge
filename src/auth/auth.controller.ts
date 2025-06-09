/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Controller,
  HttpCode,
  HttpStatus,
  Body,
  Post,
  UseGuards,
  Request,
  Get,
  UseFilters,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { LoginDto } from './dtos/login.dto';
import { ForgotPasswordDto } from './dtos/forgotPasswd.dto';
import { ResetPasswordDto } from './dtos/resetPasswd.dto';
import { SignUpDto } from './dtos/SignUp.dto';

@Controller('authentication')
@UseFilters(HttpExceptionFilter)
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  login(@Body(new ValidationPipe()) loginDto: LoginDto) {
    return this.authService.authenticate(loginDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signup')
  signUp(@Body(new ValidationPipe()) SignUpDto: SignUpDto) {
    return this.authService.signUp(SignUpDto);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  getUserInfo(@Request() request) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return request.user;
  }

  @Post('forgot-password')
  userForgotPassword(
    @Body(new ValidationPipe()) forgotPasswordDto: ForgotPasswordDto,
  ) {
    return this.authService.sendTokenToChangePassword(forgotPasswordDto);
  }

  @UseGuards(AuthGuard)
  @Post('reset-password')
  resetPassword(
    @Body(new ValidationPipe()) resetPasswordDto: ResetPasswordDto,
    @CurrentUser('id') id: string,
  ) {
    return this.authService.resetPassword(resetPasswordDto, id);
  }
}
