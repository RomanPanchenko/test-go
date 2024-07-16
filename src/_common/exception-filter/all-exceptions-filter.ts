import { ExceptionFilter, Catch, ArgumentsHost, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { HttpAdapterHost } from '@nestjs/core';
import { IErrorResponse, IExceptionHandler } from './interfaces';
import { HttpExceptionHandler } from './handlers';

interface IException {
  name?: string | undefined;
  message: string;
  stack: string;
  cause?: object;
  code?: string;
}

const getExceptionHandler = (exception: IException): IExceptionHandler => {
  // For now just returns my standard handler
  return new HttpExceptionHandler();
};

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: IException, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    const exceptionHandler = getExceptionHandler(exception);

    let statusCode: number = HttpStatus.INTERNAL_SERVER_ERROR;
    if (exception instanceof HttpException) {
      statusCode = exception.getStatus();
    } else if ((exception as any)?.response?.status) {
      statusCode = (exception as any)?.response?.status;
    }

    const responseError: IErrorResponse = {
      statusCode,
      message: exception.message,
    };

    // responseError object can be overwritten inside the function
    exceptionHandler.catch(exception, { host, httpAdapter, responseError });

    const logError: IErrorResponse = {
      ...responseError,
      name: exception.name,
      stack: exception.stack,
      cause: exception.cause ? exception.cause : null,
      timestamp: new Date().toISOString(),
      path: httpAdapter.getRequestUrl(request),
    };

    Logger.error(logError);

    httpAdapter.reply(response, responseError, responseError.statusCode);
  }
}
