import { MAX_LOT_PRICE, MIN_LOT_PRICE } from "@/shared/constants";

export const CREATE_LOT_FIELDS = {
  START_PRICE: "startPrice",
  MIN_BID_INCREMENT: "minBidIncrement",
  END_TIME: "endTime",
} as const;

export const LOT_VALIDATION = {
  PRICE: {
    MIN: MIN_LOT_PRICE,
    MAX: MAX_LOT_PRICE,
  },
  MIN_BID_INCREMENT: {
    MIN: 10,
    MAX: 100_000,
  },
  END_TIME: {
    MIN_DAYS: 1,
    MAX_DAYS: 7,
  },
} as const;
