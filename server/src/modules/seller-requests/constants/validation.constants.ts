export const SELLER_REQUEST_VALIDATION = {
  COMPANY_NAME: {
    MIN: 2,
    MAX: 100,
  },
  INN: {
    MIN: 10,
    MAX: 12,
    PATTERN: /^\d{10}$|^\d{12}$/,
    MESSAGE: 'ИНН должен содержать 10 или 12 цифр',
  },
  PHONE: {
    MIN: 10,
    MAX: 20,
  },
  EMAIL: {
    MAX: 255,
  },
  DESCRIPTION: {
    MAX: 512,
  },
  REJECTION_REASON: {
    MAX: 255,
  },
} as const;
