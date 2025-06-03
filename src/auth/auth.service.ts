import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignInData } from 'src/common/dtos/UserRole.dto';
import { UsersService } from '../users/users.service';
import { ForgotPasswordDto } from './dtos/forgotPasswd.dto';
import { ResetPasswordDto } from './dtos/resetPasswd.dto';

type AuthInput = { email: string; password: string };
type AuthResult = { sessionToken: string };

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async authenticate(input: AuthInput): Promise<AuthResult> {
    const user = await this.validateUser(input);
    console.log('user ', user);
    if (!user) {
      throw new UnauthorizedException();
    }

    const token = this.signIn(user);

    return token;
  }
  // eslint-disable-next-line @typescript-eslint/require-await
  async validateUser(input: AuthInput): Promise<SignInData | null> {
    const user = await this.userService.findByUserByName(input.email);

    if (user && user.password === input.password) {
      return {
        userId: user.id,
        email: user.email,
      };
    }
    return null;
  }

  async signIn(user: SignInData): Promise<AuthResult> {
    const tokenPayload = {
      sub: user.userId,
      email: user.email,
    };

    const sessionToken = await this.jwtService.signAsync(tokenPayload);

    return { sessionToken };
  }

  async sendTokenToChangePassword(forgotPasswordDto: ForgotPasswordDto) {
    const { email } = forgotPasswordDto;
    const user = await this.userService.findByUserByName(email);
    if (!user) {
      throw new NotFoundException();
    }
    const userInfo: SignInData = {
      userId: user.id,
      email: user.email,
    };
    return this.signIn(userInfo);
  }

  async resetPassword(resetPassword: ResetPasswordDto, id: string) {
    const { passwd } = resetPassword;
    if (!passwd) {
      throw new BadRequestException();
    }
    await this.userService.updatePassword(id, passwd);
  }
}
