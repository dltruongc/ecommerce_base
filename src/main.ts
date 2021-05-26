import { NestFactory } from '@nestjs/core';

import { HttpExceptionFilter } from '@root/filter/http-exception.filter';
import { AppModule } from '@root/app.module';
import { AppLogger } from '@root/global/logger';
import { ConfigService } from '@nestjs/config';
import { config } from 'rxjs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new AppLogger('App'),
  });

  const configService = app.get(ConfigService);

  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(configService.get('PORT'));
}

bootstrap();
