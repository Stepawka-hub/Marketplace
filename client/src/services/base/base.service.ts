import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LS_KEYS } from "@/shared/constants";
import { BASE_API_URL } from "./constants";

export const baseAPI = createApi({
  reducerPath: "baseAPI",
  tagTypes: ["Auth"],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    prepareHeaders: (headers) => {
      const accessToken = localStorage.getItem(LS_KEYS.ACCESS_TOKEN);

      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
