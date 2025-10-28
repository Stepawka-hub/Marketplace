import { Logger } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export function loggerMiddleware(logger: Logger) {
  return (req: Request, res: Response, next: NextFunction) => {
    logger.log(`Request... ${req.method} ${req.url}`);
    next();
  };
}
