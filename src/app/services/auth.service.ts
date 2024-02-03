import { Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Token } from 'src/domain/models/token';
import { User } from 'src/domain/models/user';
import { IAuthService } from 'src/domain/services/auth.service';
import {
  IUsersService,
  IUsersServiceToken,
} from 'src/domain/services/users.service';

export class AuthService implements IAuthService {
  constructor(
    @Inject(IUsersServiceToken) private usersService: IUsersService,
    private jwtService: JwtService,
  ) {}

  public async validateUser(
    username: string,
    password: string,
  ): Promise<User | null> {
    const user = await this.usersService.get(username);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  public async getJwt(user: User): Promise<string> {
    const payload: Token = { username: user.username, sub: user.Id };
    return this.jwtService.sign(payload);
  }
}
