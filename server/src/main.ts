import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 3000;
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
