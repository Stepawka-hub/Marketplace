import { baseAPI } from "../base/base.service";
import { TProduct } from "@/shared/types";

export const productAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query<TProduct[], number>({
      query: (limit: number = 5) => ({
        url: "/products",
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});

export const { useGetAllProductsQuery } = productAPI;
