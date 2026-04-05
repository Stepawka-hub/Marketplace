import { CART_TAG_TYPE } from "../base/constants";

export const CART_TAGS = {
  LIST: {
    type: CART_TAG_TYPE,
    id: "LIST",
  },
  COUNT: {
    type: CART_TAG_TYPE,
    id: "COUNT",
  },
  SELECTED_COUNT: {
    type: CART_TAG_TYPE,
    id: "SELECTED_COUNT",
  },
  TOTAL_ITEMS: {
    type: CART_TAG_TYPE,
    id: "TOTAL_ITEMS",
  },
  TOTAL_PRICE: {
    type: CART_TAG_TYPE,
    id: "TOTAL_PRICE",
  },
} as const;
