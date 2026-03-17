import { baseAPI, TPaginationParams } from "../base";
import { CART_TAG_TYPE, CART_TAGS } from "./constants";
import {
  TAddToCartPayload,
  TCartActionResponse,
  TCartCountResponse,
  TCartDeleteResponse,
  TCartResponse,
  TUpdateCartItemPayload,
} from "./types";

export const cartAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getCart: build.query<TCartResponse["data"], TPaginationParams>({
      query: (params: TPaginationParams = { page: 1, limit: 10 }) => ({
        url: "/cart",
        params: {
          page: params.page,
          limit: params.limit,
        },
      }),
      transformResponse: (response: TCartResponse) => response.data,
      providesTags: (result) =>
        result?.items
          ? [
              ...result.items.map(({ product }) => ({
                type: CART_TAG_TYPE,
                id: product.id,
              })),
              CART_TAGS.LIST,
              CART_TAGS.TOTAL_PRICE,
            ]
          : [CART_TAGS.LIST, CART_TAGS.TOTAL_PRICE],
    }),

    addToCart: build.mutation<TCartActionResponse, TAddToCartPayload>({
      query: ({ productId, count }) => ({
        url: `/cart/${productId}`,
        method: "POST",
        body: { count },
      }),
      invalidatesTags: [CART_TAGS.LIST, CART_TAGS.COUNT, CART_TAGS.TOTAL_PRICE],
    }),

    updateCartItem: build.mutation<TCartActionResponse, TUpdateCartItemPayload>(
      {
        query: ({ productId, count }) => ({
          url: `/cart/${productId}`,
          method: "PATCH",
          body: { count },
        }),
        invalidatesTags: [
          CART_TAGS.LIST,
          CART_TAGS.COUNT,
          CART_TAGS.TOTAL_PRICE,
        ],
      },
    ),

    removeFromCart: build.mutation<TCartDeleteResponse, string>({
      query: (productId: string) => ({
        url: `/cart/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: [CART_TAGS.LIST, CART_TAGS.COUNT, CART_TAGS.TOTAL_PRICE],
    }),

    clearCart: build.mutation<TCartDeleteResponse, void>({
      query: () => ({
        url: "/cart",
        method: "DELETE",
      }),
      invalidatesTags: [CART_TAGS.LIST, CART_TAGS.COUNT, CART_TAGS.TOTAL_PRICE],
    }),

    getCartCount: build.query<number, void>({
      query: () => ({
        url: "/cart/count",
        method: "GET",
      }),
      transformResponse: (response: TCartCountResponse): number =>
        response.data || 0,
      providesTags: [CART_TAGS.COUNT],
    }),
  }),
});

export const {
  useGetCartQuery,
  useAddToCartMutation,
  useUpdateCartItemMutation,
  useRemoveFromCartMutation,
  useClearCartMutation,
  useGetCartCountQuery,
} = cartAPI;
