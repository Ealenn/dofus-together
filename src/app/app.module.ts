import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { FrontModule } from './front/front.module';

@Module({
  imports: [ApiModule, FrontModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
