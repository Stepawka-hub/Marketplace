import { baseAPI, CART_TAG_TYPE, TPaginationParams } from "../base";
import { CART_TAGS } from "./constants";
import {
  TAddToCartPayload,
  TCartActionResponse,
  TCartCountResponse,
  TCartDeleteResponse,
  TCartResponse,
  TCartSelectResponse,
  TCartTotalPriceResponse,
  TSelectAllCartItemsPayload,
  TSelectCartItemPayload,
  TUpdateCartItemPayload,
} from "./types";

export const cartAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    // Получить товары в корзине
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

    // Добавить товар в корзину
    addToCart: build.mutation<TCartActionResponse, TAddToCartPayload>({
      query: ({ productId, count }) => ({
        url: `/cart/${productId}`,
        method: "POST",
        body: { count },
      }),
      invalidatesTags: [
        CART_TAGS.LIST,
        CART_TAGS.COUNT,
        CART_TAGS.SELECTED_COUNT,
        CART_TAGS.TOTAL_PRICE,
      ],
    }),

    // Обновить товар
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
          CART_TAGS.SELECTED_COUNT,
          CART_TAGS.TOTAL_PRICE,
        ],
      },
    ),

    // Удалить товар из корзины
    removeFromCart: build.mutation<TCartDeleteResponse, string>({
      query: (productId: string) => ({
        url: `/cart/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: [
        CART_TAGS.LIST,
        CART_TAGS.COUNT,
        CART_TAGS.SELECTED_COUNT,
        CART_TAGS.TOTAL_PRICE,
      ],
    }),

    // Добавить/удалить товар из выбранного
    toggleSelectedProduct: build.mutation<
      TCartSelectResponse,
      TSelectCartItemPayload
    >({
      query: ({ productId, isSelected }) => ({
        url: `/cart/select/${productId}`,
        method: "POST",
        body: { isSelected },
      }),
      invalidatesTags: [
        CART_TAGS.LIST,
        CART_TAGS.TOTAL_PRICE,
        CART_TAGS.SELECTED_COUNT,
      ],
    }),

    // Добавить/удалить товары из выбранного
    selectAllCartItems: build.mutation<
      TCartSelectResponse,
      TSelectAllCartItemsPayload
    >({
      query: ({ isSelected }) => ({
        url: `/cart/select-all`,
        method: "POST",
        body: { isSelected },
      }),
      invalidatesTags: [
        CART_TAGS.LIST,
        CART_TAGS.TOTAL_PRICE,
        CART_TAGS.SELECTED_COUNT,
      ],
    }),

    // Очистить корзину
    clearCart: build.mutation<TCartDeleteResponse, void>({
      query: () => ({
        url: "/cart",
        method: "DELETE",
      }),
      invalidatesTags: [
        CART_TAGS.LIST,
        CART_TAGS.COUNT,
        CART_TAGS.SELECTED_COUNT,
        CART_TAGS.TOTAL_PRICE,
      ],
    }),

    // Общая стоимость выбранных товаров в корзине
    getTotalPrice: build.query<number, void>({
      query: () => ({
        url: "/cart/total-price",
        method: "GET",
        body: {
          isSelected: true,
        },
      }),
      transformResponse: (response: TCartTotalPriceResponse): number =>
        response.data || 0,
      providesTags: [CART_TAGS.TOTAL_PRICE],
    }),

    // Общее количество выбранных товаров в корзине
    getSelectedCount: build.query<number, void>({
      query: () => ({
        url: "/cart/count",
        method: "GET",
        body: {
          isSelected: true,
        },
      }),
      transformResponse: (response: TCartCountResponse): number =>
        response.data || 0,
      providesTags: [CART_TAGS.SELECTED_COUNT],
    }),

    // Общее количество товаров в корзине
    getCartCount: build.query<number, void>({
      query: () => ({
        url: "/cart/count",
        method: "GET",
        body: {
          isSelected: false,
        },
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
  useSelectAllCartItemsMutation,
  useToggleSelectedProductMutation,
  useGetTotalPriceQuery,
  useGetCartCountQuery,
  useGetSelectedCountQuery,
} = cartAPI;
