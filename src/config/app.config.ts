import { registerAs } from '@nestjs/config';

export interface IAppConfig {
  host: string;
  port: number;
}

export const appConfig = registerAs(
  'app',
  () =>
    <IAppConfig>{
      host: process.env.HOST || '0.0.0.0',
      port: parseInt(process.env.PORT, 10) || 3000,
    },
);
