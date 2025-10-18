import { BadRequestException, Injectable } from '@nestjs/common';
import { formatFileSize, getMediaType } from '@/common/utils';
import { MEDIA_TYPE } from '@/common/constants';
import { TBaseValidationOptions } from './types';

@Injectable()
export abstract class BaseFileValidation {
  protected validateFileType(
    file: Express.Multer.File,
    allowedMimeTypes?: string[],
  ) {
    if (allowedMimeTypes && !allowedMimeTypes.includes(file.mimetype)) {
      throw new BadRequestException(
        `File ${file.originalname} has invalid type. Allowed: ${allowedMimeTypes.join(', ')}`,
      );
    }
  }

  protected validateFileSize(
    file: Express.Multer.File,
    options: TBaseValidationOptions,
  ) {
    const type = getMediaType(file.mimetype);
    const isImage = type === MEDIA_TYPE.IMAGE;
    const isVideo = type === MEDIA_TYPE.VIDEO;

    const maxSize = isImage
      ? options.maxImageSize
      : isVideo
        ? options.maxVideoSize
        : options.maxFileSize;

    if (maxSize && file.size > maxSize) {
      const type = isImage ? 'Image' : isVideo ? 'Video' : 'File';
      throw new BadRequestException(
        `${type} ${file.originalname} exceeds maximum size of ${formatFileSize(maxSize)}`,
      );
    }
  }
}
