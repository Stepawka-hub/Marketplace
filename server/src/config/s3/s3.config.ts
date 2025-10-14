import { S3ClientConfig } from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';

export function getStorageConfig(configService: ConfigService): S3ClientConfig {
  return {
    endpoint: configService.getOrThrow<string>('S3_ENDPOINT'),
    credentials: {
      accessKeyId: configService.getOrThrow<string>('S3_ACCESS_KEY_ID'),
      secretAccessKey: configService.getOrThrow<string>('S3_SECRET_ACCESS_KEY'),
    },
    region: configService.getOrThrow<string>('S3_REGION'),
  };
}
