export const USER_VALIDATION = {
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

export const USER_VALIDAION_MESSAGES = {
  EMAIL: {
    INVALID: 'Invalid email format',
  },
  PHONE: {
    INVALID: 'Invalid phone number format',
  },
  NAME: {
    INVALID: (field: string) =>
      `${field} must start with a capital letter and can only contain letters, single spaces or hyphens`,
  },
} as const;
