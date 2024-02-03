import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { IUsersServiceToken } from 'src/domain/services/users.service';
import { IAuthServiceToken } from 'src/domain/services/auth.service';
import { JwtModule } from '@nestjs/jwt';

const services = [
  {
    Service: UsersService,
    Token: IUsersServiceToken,
  },
  {
    Service: AuthService,
    Token: IAuthServiceToken,
  },
];

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || '123456789',
      signOptions: {
        expiresIn: parseInt(process.env.JWT_EXPIRE_SECONDS || '60'),
      },
    }),
  ],
  providers: services.map((service) => ({
    provide: service.Token,
    useClass: service.Service,
  })),
  exports: services.map((service) => service.Token),
})
export class ServicesModule {}
