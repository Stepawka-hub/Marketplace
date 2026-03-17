export const CART_TAG_TYPE = "Cart" as const;

export const CART_TAGS = {
  LIST: {
    type: CART_TAG_TYPE,
    id: "LIST",
  },
  COUNT: {
    type: CART_TAG_TYPE,
    id: "COUNT",
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
