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
    }),
    addProductToFavorites: build.mutation<TServerResponse<string>, string>({
      query: (productId: string) => ({
        url: `/favorites/${productId}`,
        method: "POST",
      }),
    }),
    removeProductFromFavorites: build.mutation<TServerResponse, string>({
      query: (productId: string) => ({
        url: `/favorites/${productId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetFavoritesProductsQuery,
  useAddProductToFavoritesMutation,
  useRemoveProductFromFavoritesMutation,
} = favoritesAPI;
