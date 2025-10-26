import { DocumentBuilder, SwaggerCustomOptions } from '@nestjs/swagger';

export const SWAGGER_PATH = '/docs';

export const SWAGGER_SETUP_OPTIONS: SwaggerCustomOptions = {
  customSiteTitle: 'Marketplace API Docs',
  jsonDocumentUrl: '/swagger.json',
  yamlDocumentUrl: '/swagger.yaml',
};

export function getSwaggerConfig() {
  return new DocumentBuilder()
    .setTitle('Marketplace API')
    .setDescription('API documentation for Marketplace')
    .setVersion('1.0.0')
    .setContact('Stepawka', '', 'stepan-lvov-04@mail.ru')
    .addBearerAuth()
    .build();
}
