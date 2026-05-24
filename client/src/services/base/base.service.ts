import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./base-query";
import {
  AUTH_TAG_TYPE,
  BID_TAG_TYPE,
  FAVORITES_TAG_TYPE,
  LOT_TAG_TYPE,
  PAYMENT_TAG_TYPE,
  PRODUCT_TAG_TYPE,
  SELLER_REQUEST_TAG_TYPE,
  STATS_TAG_TYPE,
  USER_TAG_TYPE,
} from "./constants";

export const baseAPI = createApi({
  reducerPath: "baseAPI",
  tagTypes: [
    USER_TAG_TYPE,
    AUTH_TAG_TYPE,
    PRODUCT_TAG_TYPE,
    FAVORITES_TAG_TYPE,
    LOT_TAG_TYPE,
    BID_TAG_TYPE,
    SELLER_REQUEST_TAG_TYPE,
    STATS_TAG_TYPE,
    PAYMENT_TAG_TYPE,
  ],
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
