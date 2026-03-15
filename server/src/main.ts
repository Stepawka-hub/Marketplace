import { AppModule } from './app.module';

import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SWAGGER_PATH } from './config/swagger';
import { AllExceptionsFilter, loggerMiddleware } from '@/common';

import * as cookieParser from 'cookie-parser';
import { ServerLogger, setupSwagger } from './utils';

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

  const config = app.get(ConfigService);

  // Todo: Убрать
  app.enableCors({
    origin: [config.getOrThrow<string>('ALLOWED_ORIGINS').split(',')],
    credentials: true,
  });

  setupSwagger(app);

  await app.listen(port);

  ServerLogger.logStart(port);
  ServerLogger.logSwagger(SWAGGER_PATH, port);
}
bootstrap();
