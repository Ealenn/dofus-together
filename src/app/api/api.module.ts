import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { ServicesModule } from '../services/services.module';
import { StatusController } from './status/status.controller';
import { TerminusModule } from '@nestjs/terminus';

@Module({
  imports: [TerminusModule, ServicesModule],
  controllers: [UsersController, StatusController],
  providers: [],
})
export class ApiModule {}
