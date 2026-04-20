import {
  TPaginatedResponse,
  TPaginationParams,
  TServerResponse,
} from "../base";
import { baseAPI } from "../base";
import { TProductDetails, TProductListItem } from "@/shared/types";
import { PRODUCT_TAGS } from "./constants";
import {
  TCreateProductRequest,
  TCreateProductResponse,
  TProductsResponse,
} from "./types";

export const productAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
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
      providesTags: (result) =>
        result?.items
          ? [
              ...result.items.map(({ id }) => ({
                type: PRODUCT_TAGS.MY_LIST.type,
                id,
              })),
              PRODUCT_TAGS.MY_LIST,
            ]
          : [PRODUCT_TAGS.MY_LIST],
    }),

    getProductById: build.query<TProductDetails, string>({
      query: (productId: string) => ({
        url: `/products/${productId}`,
      }),
      transformResponse: (response: TServerResponse<TProductDetails>) =>
        response.data,
      providesTags: (_, __, productId) => [
        { type: PRODUCT_TAGS.LIST.type, id: productId },
      ],
    }),

    createProduct: build.mutation<TProductDetails, TCreateProductRequest>({
      query: (formData) => ({
        url: "/products",
        method: "POST",
        body: formData,
        formData: true,
      }),
      invalidatesTags: [PRODUCT_TAGS.MY_LIST],
      transformResponse: (response: TCreateProductResponse) => response.data,
    }),
  }),
});

export const {
  useGetAllMyProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
} = productAPI;
