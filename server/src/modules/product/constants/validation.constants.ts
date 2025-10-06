export const VALIDATION = {
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
    PRECISION: 10,
    SCALE: 2,
    MIN: 0.0,
    MAX: 1_000_000.0,
  },
  RATING: {
    PRECISION: 3,
    SCALE: 2,
    DEFAULT: 0.0,
    MIN: 0,
    MAX: 5.0,
  },
} as const;
