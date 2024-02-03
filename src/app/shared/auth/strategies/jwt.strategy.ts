import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/domain/models/user';
import {
  IUsersService,
  IUsersServiceToken,
} from 'src/domain/services/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject(IUsersServiceToken) private userService: IUsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: '123456789',
    });
  }

  async validate(payload: any): Promise<User> {
    console.log(payload);
    return this.userService.get(payload.username);
  }
}
