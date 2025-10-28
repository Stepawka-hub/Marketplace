import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { BASE_API_URL } from "./constants";

export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
  }),
  endpoints: (build) => ({
    login: build.mutation({
      query: () => ({
        url: "/login",
      }),
    }),
  }),
});
