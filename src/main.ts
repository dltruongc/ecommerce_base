import { NestFactory } from '@nestjs/core';

import { HttpExceptionFilter } from '@root/filter/http-exception.filter';
import { AppModule } from '@root/app.module';
import { AppLogger } from '@root/global/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new AppLogger('App'),
  });

  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(3000);
}

bootstrap();
