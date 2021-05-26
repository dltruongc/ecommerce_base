import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { ProductModule } from '@modules/product/product.module';
import { UserModule } from '@modules/user/user.module';

import { configModuleOptions } from './shared/constant/config.module.options';
import { typeormModuleOptions } from './shared/constant/typeorm.module.options';

@Module({
  imports: [
    ProductModule,
    UserModule,
    ConfigModule.forRoot(configModuleOptions),
    TypeOrmModule.forRoot(typeormModuleOptions),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
