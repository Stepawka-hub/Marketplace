import { TServerResponse } from "../base";
import { baseAPI } from "../base/base.service";
import { TProductDetails, TProductListItem } from "@/shared/types";

export const productAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query<TProductListItem[], number>({
      query: (limit: number = 5) => ({
        url: "/products",
        params: {
          _limit: limit,
        },
      }),
      transformResponse: (response: TServerResponse<TProductListItem[]>) =>
        response.data,
    }),
    getProductById: build.query<TProductDetails, string>({
      query: (productId: string) => ({
        url: `/products/${productId}`,
      }),
      transformResponse: (response: TServerResponse<TProductDetails>) =>
        response.data,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } = productAPI;
