import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { TFilesValidationOptions } from './types';

@Injectable()
export class FilesValidationPipe implements PipeTransform {
  constructor(
    private readonly options: TFilesValidationOptions = {
      minCount: 1,
      maxCount: 10,
    },
  ) {}

  transform(files: Express.Multer.File[]): Express.Multer.File[] {
    this.validateFilesCount(files);
    this.validateFilesContent(files);
    return files;
  }

  private validateFilesCount(files: Express.Multer.File[]) {
    if (!files || !files.length) {
      if (this.options.minCount && this.options.minCount > 0) {
        throw new BadRequestException(
          `Minimum ${this.options.minCount} file(s) required`,
        );
      }

      return;
    }

    if (this.options.minCount && files.length < this.options.minCount) {
      throw new BadRequestException(
        `Minimum ${this.options.minCount} file(s) required`,
      );
    }

    if (this.options.maxCount && files.length > this.options.maxCount) {
      throw new BadRequestException(
        `Maximum ${this.options.maxCount} file(s) allowed`,
      );
    }
  }

  private validateFilesContent(files: Express.Multer.File[]) {
    files.forEach((file) => {
      this.validateFileType(file);
      this.validateFileSize(file);
    });
  }

  private validateFileType(file: Express.Multer.File) {
    if (
      this.options.allowedMimeTypes &&
      !this.options.allowedMimeTypes.includes(file.mimetype)
    ) {
      throw new BadRequestException(
        `File ${file.originalname} has invalid type. Allowed: ${this.options.allowedMimeTypes.join(', ')}`,
      );
    }
  }

  private validateFileSize(file: Express.Multer.File) {
    const isImage = file.mimetype.startsWith('image/');
    const isVideo = file.mimetype.startsWith('video/');
    const maxSize = isImage
      ? this.options.maxImageSize
      : isVideo
        ? this.options.maxVideoSize
        : null;

    if (maxSize && file.size > maxSize) {
      const type = isImage ? 'Image' : isVideo ? 'Video' : 'File';
      throw new BadRequestException(
        `${type} ${file.originalname} exceeds maximum size of ${maxSize / 1024 / 1024}MB`,
      );
    }
  }
}
