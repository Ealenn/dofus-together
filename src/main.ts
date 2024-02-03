import { NestFactory } from '@nestjs/core';
import {
  NestFastifyApplication,
  FastifyAdapter,
} from '@nestjs/platform-fastify';
import { AppModule } from './app/app.module';
import { bootstrapSwagger } from './main.swagger';
import { bootstrapFront } from './main.front';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  await bootstrapSwagger(app);
  await bootstrapFront(app);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
