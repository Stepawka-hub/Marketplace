import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./base-query";
import { CART_TAG_TYPE } from "../cart";
import { FAVORITES_TAG_TYPE } from "../favorites";
import { AUTH_TAG_TYPE } from "../auth";

export const baseAPI = createApi({
  reducerPath: "baseAPI",
  tagTypes: [AUTH_TAG_TYPE, FAVORITES_TAG_TYPE, CART_TAG_TYPE],
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
