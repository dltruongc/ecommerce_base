import { Logger } from '@nestjs/common';

import * as winston from 'winston';
import 'winston-daily-rotate-file';

export class AppLogger extends Logger {
  private _logger: winston.Logger;

  constructor(context?: string, isTimestampEnabled?: boolean) {
    super(context, isTimestampEnabled);

    const errorTransport = new winston.transports.DailyRotateFile({
      filename: '%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '7d',
      level: 'error',
      dirname: 'logs/errors',
    });

    const accessTransport = new winston.transports.DailyRotateFile({
      filename: '%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '100m',
      maxFiles: '90d',
      dirname: 'logs/events',
    });

    this._logger = winston.createLogger({
      level: process.env.NODE_ENV !== 'production' ? 'silly' : 'info',
      format: winston.format.json(),
      transports: [errorTransport, accessTransport],
      exitOnError: false,
    });
  }

  error(message: any, trace?: string, context?: string): void {
    super.error(message, trace, context);
    this._logger.error({ message, trace, context });
  }

  log(message: any, context?: string): void {
    super.log(message, context);
    this._logger.info({ message, context });
  }

  warn(message: any, context?: string): void {
    super.warn(message, context);
    this._logger.warn({ message, context });
  }

  debug(message: any, context?: string): void {
    super.debug(message, context);
    this._logger.debug({ message, context });
  }

  verbose(message: any, context?: string): void {
    super.verbose(message, context);
    this._logger.verbose({ message, context });
  }

  setContext(context: string): void {
    super.setContext(context);
  }
}
