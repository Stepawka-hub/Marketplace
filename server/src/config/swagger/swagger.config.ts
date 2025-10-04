import { DocumentBuilder } from '@nestjs/swagger';

export const SWAGGER_CONFIG = {
  title: 'Marketplace API',
  description: 'API documentation for Marketplace',
  version: '1.0.0',
  contact: {
    name: 'Stepawka',
    email: 'stepan-lvov-04@mail.ru',
  },
};

export function getSwaggerConfig() {
  return new DocumentBuilder()
    .setTitle(SWAGGER_CONFIG.title)
    .setDescription(SWAGGER_CONFIG.description)
    .setVersion(SWAGGER_CONFIG.version)
    .setContact(SWAGGER_CONFIG.contact.name, '', SWAGGER_CONFIG.contact.email)
    .build();
}
