export const LOT_VALIDATION = {
  PRICE: {
    PRECISION: 10,
    SCALE: 2,
    MIN: 10,
    MAX: 10_000_000,
  },
  MIN_BID_INCREMENT: {
    DEFAULT: 100,
    MIN: 10,
    MAX: 100_000,
  },
  STATUS: {
    VALID_VALUES: ['DRAFT', 'ACTIVE', 'COMPLETED', 'CANCELLED', 'EXPIRED'],
  },
};
