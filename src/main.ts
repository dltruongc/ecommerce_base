import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { AppLogger } from './global/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new AppLogger('App'),
  });
  await app.listen(3000);
}

bootstrap();
