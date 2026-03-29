import {
  baseAPI,
  FAVORITES_TAG_TYPE,
  TPaginatedResponse,
  TPaginationParams,
  TServerResponse,
} from "../base";
import { FAVORITES_TAGS } from "./constants";
import { TProductListItem } from "@/shared/types";
import { TFavoritesResponse } from "./types";

export const favoritesAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getFavoritesProducts: build.query<TFavoritesResponse, TPaginationParams>({
      query: (params: TPaginationParams = { page: 1, limit: 10 }) => ({
        url: "/favorites",
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
                type: FAVORITES_TAG_TYPE,
                id,
              })),
              FAVORITES_TAGS.LIST,
            ]
          : [FAVORITES_TAGS.LIST],
    }),

    addProductToFavorites: build.mutation<string, string>({
      query: (productId: string) => ({
        url: `/favorites/${productId}`,
        method: "POST",
      }),
      transformResponse: (response: TServerResponse<string>) => response.data,
      invalidatesTags: [
        FAVORITES_TAGS.LIST,
        FAVORITES_TAGS.IDS,
        FAVORITES_TAGS.COUNT,
      ],
    }),

    removeProductFromFavorites: build.mutation<TServerResponse, string>({
      query: (productId: string) => ({
        url: `/favorites/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: [
        FAVORITES_TAGS.LIST,
        FAVORITES_TAGS.IDS,
        FAVORITES_TAGS.COUNT,
      ],
    }),

    getCountFavorites: build.query<number, void>({
      query: () => ({
        url: "/favorites/count",
        method: "GET",
      }),
      transformResponse: (response: TServerResponse<number>): number =>
        response.data || 0,
      providesTags: [FAVORITES_TAGS.COUNT],
    }),

    getFavoriteIds: build.query<string[], void>({
      query: () => ({
        url: "/favorites/ids",
        method: "GET",
      }),
      transformResponse: (response: TServerResponse<string[]>) => response.data,
      providesTags: [FAVORITES_TAGS.IDS],
    }),
  }),
});

export const {
  useGetFavoritesProductsQuery,
  useAddProductToFavoritesMutation,
  useRemoveProductFromFavoritesMutation,
  useGetCountFavoritesQuery,
  useGetFavoriteIdsQuery,
} = favoritesAPI;
