import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { envValidate } from '@root/validation/env.validation';
import { appConfig, databaseConfig } from '@root/config';

import { ProductModule } from '@modules/product/product.module';
import { UserModule } from '@modules/user/user.module';

@Module({
  imports: [
    ProductModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig],
      validate: envValidate,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
