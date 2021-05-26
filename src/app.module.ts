import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { envValidate } from '@root/validation/env.validation';
import { appConfig, databaseConfig } from '@root/config';

import { ProductModule } from '@modules/product/product.module';
import { UserModule } from '@modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NamedEnv } from './shared/env/env';

@Module({
  imports: [
    ProductModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig],
      validate: envValidate,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: NamedEnv.db.host,
      port: NamedEnv.db.port as any,
      username: NamedEnv.db.user,
      password: NamedEnv.db.pwd,
      database: NamedEnv.db.name,
      entities: ['../src/**/*.entity.{js,ts}'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
