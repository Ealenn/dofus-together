import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/app/shared/auth/local-auth.guard';
import {
  IAuthService,
  IAuthServiceToken,
} from 'src/domain/services/auth.service';
import { LoginRequestRawBody, LoginResponseBody } from './models/login';
import { ClsService } from 'nestjs-cls';
import { User } from 'src/domain/models/user';
import { JwtAuthGuard } from 'src/app/shared/auth/jwt-auth.guard';
import {
  ApiBearerAuth,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@ApiTags('Users')
@ApiUnauthorizedResponse()
@Controller('/api/users')
export class UsersController {
  constructor(
    @Inject(IAuthServiceToken) private authService: IAuthService,
    private readonly clsService: ClsService,
  ) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Body() _body: LoginRequestRawBody) {
    const user = this.clsService.get<User>('user');
    return this.authService.getJwt(user);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiResponse({ type: LoginResponseBody })
  async me(): Promise<LoginResponseBody> {
    const user = this.clsService.get<User>('user');
    return {
      id: user.Id,
      username: user.username,
    };
  }
}
