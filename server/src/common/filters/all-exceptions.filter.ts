import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const exceptionResponse =
      exception instanceof HttpException
        ? exception.getResponse()
        : 'Internal server error';

    const timestamp = new Date().toISOString();
    const responseBody =
      typeof exceptionResponse === 'object'
        ? { ...exceptionResponse, timestamp }
        : {
            message: exceptionResponse,
            statusCode: status,
            timestamp,
          };

    this.logger.error(`Status: ${status}, ${request.method} ${request.url}`);

    response.status(status).json(responseBody);
  }
}
