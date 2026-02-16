import { TServerResponse } from "../base";
import { baseAPI } from "../base/base.service";
import { TProductListItem } from "@/shared/types";

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
              { type: "Favorites", id: "LIST" },
            ]
          : [{ type: "Favorites", id: "LIST" }],
    }),
    addProductToFavorites: build.mutation<string, string>({
      query: (productId: string) => ({
        url: `/favorites/${productId}`,
        method: "POST",
      }),
      transformResponse: (response: TServerResponse<string>) => response.data,
      invalidatesTags: [{ type: "Favorites", id: "LIST" }],
    }),
    removeProductFromFavorites: build.mutation<TServerResponse, string>({
      query: (productId: string) => ({
        url: `/favorites/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Favorites", id: "LIST" }],
    }),
  }),
});

export const {
  useGetFavoritesProductsQuery,
  useAddProductToFavoritesMutation,
  useRemoveProductFromFavoritesMutation,
} = favoritesAPI;
