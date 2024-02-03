import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { FrontModule } from './front/front.module';
import { ServicesModule } from './services/services.module';
import { SharedModule } from './shared/shared.module';
import { PassportModule } from '@nestjs/passport';
import { ClsModule } from 'nestjs-cls';

@Module({
  imports: [SharedModule, ServicesModule, ApiModule, FrontModule, PassportModule,
    ClsModule.forRoot({
      global: true,
      middleware: {
        mount: true,
        setup: (cls, _req) => {
          cls.set('user', null);
        },
      },
    }),
  ],
  providers: [],
})
export class AppModule {}
