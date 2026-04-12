import { TLotDetails } from "@/shared/types";
import { baseAPI, TPaginationParams, TServerResponse } from "../base";
import { LOT_TAGS } from "./constants";
import { TCreateLotRequest, TCreateLotResponse, TLotsResponse } from "./types";

export const lotAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    createLot: build.mutation<TLotDetails, TCreateLotRequest>({
      query: (formData) => ({
        url: "/lots",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: [LOT_TAGS.MY_LOTS, LOT_TAGS.LIST],
      transformResponse: (response: TCreateLotResponse) => response.data,
    }),

    getMyLots: build.query<TLotsResponse, TPaginationParams>({
      query: (params: TPaginationParams = { page: 1, limit: 10 }) => ({
        url: "/lots/my-lots",
        params: {
          page: params.page,
          limit: params.limit,
        },
      }),
      transformResponse: (response: TLotsResponse) => response,
      providesTags: (result) =>
        result?.items
          ? [
              ...result.items.map(({ id }) => ({
                type: LOT_TAGS.MY_LOTS.type,
                id,
              })),
              LOT_TAGS.MY_LOTS,
            ]
          : [LOT_TAGS.MY_LOTS],
    }),

    getLotById: build.query<TLotDetails, string>({
      query: (lotId: string) => ({
        url: `/lots/${lotId}`,
      }),
      transformResponse: (response: TServerResponse<TLotDetails>) =>
        response.data,
      providesTags: (_, __, lotId) => [
        { type: LOT_TAGS.DETAIL.type, id: lotId },
      ],
    }),

    getAllLots: build.query<TLotsResponse, TPaginationParams>({
      query: (params: TPaginationParams = { page: 1, limit: 10 }) => ({
        url: "/lots",
        params: {
          page: params.page,
          limit: params.limit,
        },
      }),
      transformResponse: (response: TLotsResponse) => response,
      providesTags: (result) =>
        result?.items
          ? [
              ...result.items.map(({ id }) => ({
                type: LOT_TAGS.LIST.type,
                id,
              })),
              LOT_TAGS.LIST,
            ]
          : [LOT_TAGS.LIST],
    }),

    cancelLot: build.mutation<TLotDetails, string>({
      query: (lotId: string) => ({
        url: `/lots/${lotId}/cancel`,
        method: "PATCH",
      }),
      invalidatesTags: (_, __, lotId) => [
        LOT_TAGS.MY_LOTS,
        { type: LOT_TAGS.DETAIL.type, id: lotId },
      ],
      transformResponse: (response: TServerResponse<TLotDetails>) =>
        response.data,
    }),

    activateLot: build.mutation<TLotDetails, string>({
      query: (lotId: string) => ({
        url: `/lots/${lotId}/activate`,
        method: "PATCH",
      }),
      invalidatesTags: (_, __, lotId) => [
        LOT_TAGS.MY_LOTS,
        { type: LOT_TAGS.DETAIL.type, id: lotId },
      ],
      transformResponse: (response: TServerResponse<TLotDetails>) =>
        response.data,
    }),
  }),
});

export const {
  useCreateLotMutation,
  useGetMyLotsQuery,
  useGetLotByIdQuery,
  useGetAllLotsQuery,
  useCancelLotMutation,
  useActivateLotMutation,
} = lotAPI;
