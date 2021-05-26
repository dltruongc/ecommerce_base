import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import express, { Request } from 'express';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => {
        const ctx = context.switchToHttp();
        // const request = ctx.getRequest<Request>();
        // const url = request.originalUrl;
        const response = ctx.getResponse<express.Response>();

        const status = response.statusCode;

        const res = {
          data,
          msg: null,
          sucess: true,
          status,
        };

        return res;
      }),
    );
  }
}
