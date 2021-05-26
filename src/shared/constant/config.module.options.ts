import { ConfigModuleOptions } from '@nestjs/config';
import { appConfig, databaseConfig } from '@root/config';
import { envValidate } from '@root/validation/env.validation';

export const configModuleOptions: ConfigModuleOptions = {
  isGlobal: true,
  load: [appConfig, databaseConfig],
  validate: envValidate,
};
