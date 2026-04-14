export const BASE_API_URL = import.meta.env.VITE_API_URL;

export const HTTP_STATUS = {
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
} as const;

export const AUTH_TAG_TYPE = "Auth" as const;
export const PRODUCT_TAG_TYPE = "Product" as const;
export const FAVORITES_TAG_TYPE = "Favorites" as const;
export const LOT_TAG_TYPE = "Lot" as const;
