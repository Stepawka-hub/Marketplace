import {
  TPaginatedResponse,
  TPaginationParams,
  TServerResponse,
} from "../base";
import { baseAPI } from "../base/base.service";
import { TProductDetails, TProductListItem } from "@/shared/types";
import { TProductsResponse } from "./types";

export const productAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query<TProductsResponse, TPaginationParams>({
      query: (params: TPaginationParams = { page: 1, limit: 10 }) => ({
        url: "/products",
        params: {
          page: params.page,
          limit: params.limit,
        },
      }),
      transformResponse: (response: TPaginatedResponse<TProductListItem>) =>
        response.data,
    }),

    getAllMyProducts: build.query<TProductsResponse, TPaginationParams>({
      query: (params: TPaginationParams = { page: 1, limit: 10 }) => ({
        url: "/products/my-products",
        params: {
          page: params.page,
          limit: params.limit,
        },
      }),
      transformResponse: (response: TPaginatedResponse<TProductListItem>) =>
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

export const {
  useGetAllProductsQuery,
  useGetAllMyProductsQuery,
  useGetProductByIdQuery,
} = productAPI;
