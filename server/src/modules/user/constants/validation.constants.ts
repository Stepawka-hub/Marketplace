export const VALIDATION = {
  EMAIL: {
    MIN: 8,
    MAX: 128,
  },
  NAME: {
    MIN: 2,
    MAX: 64,
  },
  PASSWORD: {
    MIN: 8,
    MAX: 128,
  },
  PHONE: {
    MIN: 5,
    MAX: 20,
  },
} as const;

export const MESSAGES = {
  EMAIL: {
    INVALID: 'Invalid email format',
  },
  PHONE: {
    INVALID: 'Invalid phone number format',
  },
  NAME: {
    INVALID: (field: string) =>
      `${field} can only contain letters, spaces and hyphens`,
  },
  AVATAR: {
    INVALID_URL: 'Avatar must be a valid URL',
  },
} as const;
