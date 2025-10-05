import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { getSwaggerConfig, SWAGGER_SETUP_OPTIONS } from './config/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 3000;

  const swaggerConfig = getSwaggerConfig();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/docs', app, document, SWAGGER_SETUP_OPTIONS);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port);

  console.log(
    '\x1b[36m%s\x1b[0m',
    `🚀 Server running on http://localhost:${port}`,
  );
  console.log(
    '\x1b[32m%s\x1b[0m',
    `👉 Environment: ${process.env.NODE_ENV || 'development'}`,
  );
}
bootstrap();
