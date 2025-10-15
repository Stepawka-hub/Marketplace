import { getStorageConfig } from '@/config/s3';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class StorageService {
  private readonly client: S3Client;
  private readonly bucket: string;

  public constructor(
    private configService: ConfigService,
    private logger: Logger,
  ) {
    this.client = new S3Client(getStorageConfig(configService));
    this.bucket = configService.getOrThrow<string>('S3_BUCKET_NAME');
  }

  async uploadFile(key: string, file: Express.Multer.File) {
    try {
      const command = new PutObjectCommand({
        Bucket: this.bucket,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
      });

      return await this.client.send(command);
    } catch (e) {
      // Todo: Нужен ли логгер?
      this.logger.error(e);
      throw new InternalServerErrorException('Error with storage');
    }
  }
}
