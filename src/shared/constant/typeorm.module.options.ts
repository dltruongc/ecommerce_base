import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { NamedEnv } from '@root/shared/env/named_env';

export const typeormModuleOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  host: NamedEnv.db.host,
  port: NamedEnv.db.port as any,
  username: NamedEnv.db.user,
  password: NamedEnv.db.pwd,
  database: NamedEnv.db.name,
  entities: ['../src/**/*.entity.{js,ts}'],
};
