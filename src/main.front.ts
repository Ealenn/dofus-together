import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { join } from 'path';

export async function bootstrapFront(
  app: NestFastifyApplication,
): Promise<void> {
  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
    prefix: '/static/',
  });
  app.setViewEngine({
    engine: {
      handlebars: require('handlebars'),
    },
    templates: join(__dirname, '..', 'views'),
  });
}
