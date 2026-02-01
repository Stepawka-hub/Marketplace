import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./base-query";

export const baseAPI = createApi({
  reducerPath: "baseAPI",
  tagTypes: ["Auth"],
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
