import { INestApplication } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import {
  getSwaggerConfig,
  SWAGGER_PATH,
  SWAGGER_SETUP_OPTIONS,
} from '@/config/swagger';

export function setupSwagger(app: INestApplication) {
  const config = getSwaggerConfig();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(SWAGGER_PATH, app, document, SWAGGER_SETUP_OPTIONS);
}
