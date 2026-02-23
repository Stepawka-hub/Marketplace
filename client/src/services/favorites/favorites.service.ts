import { TServerResponse } from "../base";
import { baseAPI } from "../base/base.service";
import { TProductListItem } from "@/shared/types";
import { FAVORITES_TAGS } from "./constants";

export const favoritesAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getFavoritesProducts: build.query<TProductListItem[], number>({
      query: (limit: number = 5) => ({
        url: "/favorites",
        params: {
          _limit: limit,
        },
      }),
      transformResponse: (response: TServerResponse<TProductListItem[]>) =>
        response.data,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Favorites" as const, id })),
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
        url: "favorites/ids",
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
