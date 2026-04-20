export const BID_VALIDATION = {
  AMOUNT: {
    PRECISION: 10,
    SCALE: 2,
    MIN: 0.01,
    MAX: 99999999.99,
  },
  STATUS: {
    VALID_VALUES: ['ACTIVE', 'OUTBID', 'WINNING', 'LOST'],
  },
};
