import { SwaggerCustomOptions } from '@nestjs/swagger';

export const SWAGGER_SETUP_OPTIONS: SwaggerCustomOptions = {
  customSiteTitle: 'Marketplace API Docs',
  jsonDocumentUrl: '/swagger.json',
  yamlDocumentUrl: '/swagger.yaml',
};
