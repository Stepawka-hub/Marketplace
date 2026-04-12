import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./base-query";
import {
  AUTH_TAG_TYPE,
  CART_TAG_TYPE,
  FAVORITES_TAG_TYPE,
  LOT_TAG_TYPE,
  PRODUCT_TAG_TYPE,
} from "./constants";

export const baseAPI = createApi({
  reducerPath: "baseAPI",
  tagTypes: [
    AUTH_TAG_TYPE,
    PRODUCT_TAG_TYPE,
    FAVORITES_TAG_TYPE,
    CART_TAG_TYPE,
    LOT_TAG_TYPE,
  ],
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
