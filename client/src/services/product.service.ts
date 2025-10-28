import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL } from "./constants";
import { TProduct } from "@/shared/types";

export const productAPI = createApi({
  reducerPath: "productAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
  }),
  endpoints: (build) => ({
    fetchAllProducts: build.query<TProduct[], number>({
      query: (limit: number = 5) => ({
        url: "/products",
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});
