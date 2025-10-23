import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter, loggerMiddleware } from '@/common';
import { AppModule } from './app.module';
import { ServerLogger, setupSwagger } from './utils';
import * as cookieParser from 'cookie-parser';
import { SWAGGER_PATH } from './config/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 3000;
  const globalLogger = new Logger('Global logger');

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
      whitelist: true,
    }),
  );
  app.useGlobalFilters(new AllExceptionsFilter());
  app.use(loggerMiddleware(globalLogger));
  app.use(cookieParser());

  setupSwagger(app);

  await app.listen(port);

  ServerLogger.logStart(port);
  ServerLogger.logSwagger(SWAGGER_PATH, port);
}
bootstrap();
