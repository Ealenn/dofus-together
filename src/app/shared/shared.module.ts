import { Module } from '@nestjs/common';
import { LocalStrategy } from './auth/strategies/local.strategy';
import { ServicesModule } from '../services/services.module';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { JwtStrategy } from './auth/strategies/jwt.strategy';

@Module({
  imports: [ServicesModule],
  providers: [LocalStrategy, LocalAuthGuard, JwtStrategy, JwtAuthGuard],
  exports: [LocalStrategy, LocalAuthGuard, JwtStrategy, JwtAuthGuard],
})
export class SharedModule {}
