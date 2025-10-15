import { randomBytes } from 'crypto';
import { extname } from 'path';
import { MEDIA_TYPE } from '../constants';
import { BadRequestException } from '@nestjs/common';

export function formatFileSize(bytes: number) {
  const units = ['B', 'KB', 'MB', 'GB'];
  let size = bytes;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  return `${size.toFixed(1)}${units[unitIndex]}`;
}

export function generateFileName(file: Express.Multer.File, prefix = '') {
  const extension = extname(file.originalname);
  const fileName = randomBytes(16).toString('hex') + extension;

  return `${prefix}${fileName}`;
}

export function isImage(mimetype: string) {
  return mimetype.startsWith('image/');
}

export function isVideo(mimetype: string) {
  return mimetype.startsWith('video/');
}

export function getMediaType(mimetype: string) {
  if (isImage(mimetype)) {
    return MEDIA_TYPE.IMAGE;
  }
  if (isVideo(mimetype)) {
    return MEDIA_TYPE.VIDEO;
  }

  throw new BadRequestException(`Unsupported media type: ${mimetype}`);
}
