import { TFilesValidationOptions } from '@/common/pipes';

export const PRODUCT_VALIDATION = {
  NAME: {
    MIN: 8,
    MAX: 255,
  },
  DESCRIPTION: {
    MIN: 16,
    MAX: 1024,
  },
  SHORT_DESCRIPTION: {
    MIN: 10,
    MAX: 255,
  },
  CATEGORY: {
    MIN: 2,
    MAX: 32,
  },
  PRICE: {
    PRECISION: 9,
    SCALE: 2,
    MIN: 0.0,
    MAX: 1_000_000.0,
  },
  RATING: {
    PRECISION: 3,
    SCALE: 2,
    DEFAULT: 0.0,
    MIN: 0.0,
    MAX: 5.0,
  },
};

export const PRODUCT_MEDIA_VALIDATION_OPTIONS: Required<TFilesValidationOptions> =
  {
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
