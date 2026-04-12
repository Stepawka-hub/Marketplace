import {
  baseAPI,
  FAVORITES_TAG_TYPE,
  TPaginatedResponse,
  TPaginationParams,
  TServerResponse,
} from "../base";
import { FAVORITES_TAGS } from "./constants";
import { TLotListItem } from "@/shared/types";
import { TFavoritesResponse } from "./types";

export const favoritesAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getFavoritesLots: build.query<TFavoritesResponse, TPaginationParams>({
      query: (params: TPaginationParams = { page: 1, limit: 10 }) => ({
        url: "/favorites",
        params: {
          page: params.page,
          limit: params.limit,
        },
      }),
      transformResponse: (response: TPaginatedResponse<TLotListItem>) =>
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

    addLotToFavorites: build.mutation<string, string>({
      query: (lotId: string) => ({
        url: `/favorites/${lotId}`,
        method: "POST",
      }),
      transformResponse: (response: TServerResponse<string>) => response.data,
      invalidatesTags: [
        FAVORITES_TAGS.LIST,
        FAVORITES_TAGS.IDS,
        FAVORITES_TAGS.COUNT,
      ],
    }),

    removeLotFromFavorites: build.mutation<TServerResponse, string>({
      query: (lotId: string) => ({
        url: `/favorites/${lotId}`,
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
  useGetFavoritesLotsQuery,
  useAddLotToFavoritesMutation,
  useRemoveLotFromFavoritesMutation,
  useGetCountFavoritesQuery,
  useGetFavoriteIdsQuery,
} = favoritesAPI;
