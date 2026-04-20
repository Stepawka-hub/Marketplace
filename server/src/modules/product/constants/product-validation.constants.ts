import {
  TFilesValidationOptions,
  TFileValidationOptions,
} from '@/common/validation';

export const PRODUCT_VALIDATION = {
  NAME: {
    MIN: 3,
    MAX: 128,
  },
  DESCRIPTION: {
    MAX: 512,
  },
  SHORT_DESCRIPTION: {
    MIN: 10,
    MAX: 255,
  },
  CATEGORY: {
    MIN: 2,
    MAX: 32,
  },
};

export const PRODUCT_MEDIA_VALIDATION = {
  URL: {
    MIN: 10,
    MAX: 1024,
  },
  FILENAME: {
    MIN: 1,
    MAX: 255,
  },
} as const;

export const PRODUCT_MEDIA_FILES_VALIDATION_OPTIONS: TFilesValidationOptions = {
  minCount: 1,
  maxCount: 7,
  maxImageSize: 5 * 1024 * 1024,
  maxVideoSize: 50 * 1024 * 1024,
  allowedMimeTypes: [
    'image/jpeg',
    'image/png',
    'image/webp',
    'video/mp4',
    'video/webm',
  ],
} as const;

export const PRODUCT_PREVIEW_FILE_VALIDATION_OPTIONS: TFileValidationOptions = {
  required: true,
  maxImageSize: 5 * 1024 * 1024,
  allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
} as const;
