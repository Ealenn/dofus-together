import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { ServicesModule } from '../services/services.module';

@Module({
  imports: [ServicesModule],
  controllers: [UsersController],
  providers: [],
})
export class ApiModule {}
