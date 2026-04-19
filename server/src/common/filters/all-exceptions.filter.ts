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

    this.logger.error('=== EXCEPTION DETAILS ===');
    this.logger.error('Message:', this.getErrorMessage(exception));
    this.logger.error('Stack:', this.getErrorStack(exception));

    if (this.isHttpException(exception)) {
      this.logger.error('Response field:', exception.getResponse());
    }

    const status = this.getStatus(exception);
    const responseBody = this.getResponseBody(exception, status);

    this.logger.error(`Status: ${status}, ${request.method} ${request.url}`);
    this.logger.error('Response body:', responseBody);

    response.status(status).json(responseBody);
  }

  private getErrorMessage(exception: unknown): string {
    if (exception instanceof Error) {
      return exception.message;
    }

    if (this.isHttpException(exception)) {
      const response = exception.getResponse();

      if (
        typeof response === 'object' &&
        response !== null &&
        'message' in response
      ) {
        return String(response.message);
      }

      if (typeof response === 'string') {
        return response;
      }

      return JSON.stringify(response);
    }

    return 'Unknown error';
  }

  private getErrorStack(exception: unknown): string | undefined {
    if (exception instanceof Error) {
      return exception.stack;
    }

    return undefined;
  }

  private isHttpException(exception: unknown): exception is HttpException {
    return exception instanceof HttpException;
  }

  private getStatus(exception: unknown): number {
    if (this.isHttpException(exception)) {
      return exception.getStatus();
    }

    return HttpStatus.INTERNAL_SERVER_ERROR;
  }

  private getResponseBody(exception: unknown, status: number): unknown {
    const timestamp = new Date().toISOString();

    if (this.isHttpException(exception)) {
      const exceptionResponse = exception.getResponse();
      if (typeof exceptionResponse === 'object' && exceptionResponse !== null) {
        return {
          ...exceptionResponse,
          timestamp,
        };
      }

      return {
        message: exceptionResponse,
        statusCode: status,
        timestamp,
      };
    }

    const error = exception as Error;
    return {
      message: error?.message || 'Internal server error',
      statusCode: status,
      timestamp,
    };
  }
}
