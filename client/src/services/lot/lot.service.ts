import { TBidLotItem, TLotDetails, TLotListItem } from "@/shared/types";
import {
  baseAPI,
  TPaginatedResponse,
  TPaginationParams,
  TServerResponse,
} from "../base";
import { LOT_TAGS } from "./constants";
import {
  TCreateLotRequest,
  TCreateLotResponse,
  TLotsResponse,
  TBidLotsResponse,
  TActiveBidsCountResponse,
} from "./types";

export const lotAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getAllLots: build.query<TLotsResponse, TPaginationParams>({
      query: (params: TPaginationParams = { page: 1, limit: 10 }) => ({
        url: "/lots",
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
                type: LOT_TAGS.LIST.type,
                id,
              })),
              LOT_TAGS.LIST,
            ]
          : [LOT_TAGS.LIST],
    }),

    getMyLots: build.query<TLotsResponse, TPaginationParams>({
      query: (params: TPaginationParams = { page: 1, limit: 10 }) => ({
        url: "/lots/me",
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
                type: LOT_TAGS.MY_LOTS.type,
                id,
              })),
              LOT_TAGS.MY_LOTS,
            ]
          : [LOT_TAGS.MY_LOTS],
    }),

    getMyActiveBids: build.query<TBidLotsResponse, TPaginationParams>({
      query: (params: TPaginationParams = { page: 1, limit: 10 }) => ({
        url: "/lots/me/bids/active",
        params: {
          page: params.page,
          limit: params.limit,
        },
      }),
      transformResponse: (response: TPaginatedResponse<TBidLotItem>) =>
        response.data,
      providesTags: (result) =>
        result?.items
          ? [
              ...result.items.map(({ id }) => ({
                type: LOT_TAGS.MY_ACTIVE_BIDS.type,
                id,
              })),
              LOT_TAGS.MY_ACTIVE_BIDS,
            ]
          : [LOT_TAGS.MY_ACTIVE_BIDS],
    }),

    getMyActiveBidsCount: build.query<number, void>({
      query: () => ({
        url: "/lots/me/bids/active/count",
      }),
      transformResponse: (response: TActiveBidsCountResponse) => response.data,
      providesTags: [LOT_TAGS.MY_ACTIVE_BIDS_COUNT],
    }),

    getMyBidsHistory: build.query<TBidLotsResponse, TPaginationParams>({
      query: (params: TPaginationParams = { page: 1, limit: 10 }) => ({
        url: "/lots/me/bids/history",
        params: {
          page: params.page,
          limit: params.limit,
        },
      }),
      transformResponse: (response: TPaginatedResponse<TBidLotItem>) =>
        response.data,
      providesTags: (result) =>
        result?.items
          ? [
              ...result.items.map(({ id }) => ({
                type: LOT_TAGS.MY_BIDS_HISTORY.type,
                id,
              })),
              LOT_TAGS.MY_BIDS_HISTORY,
            ]
          : [LOT_TAGS.MY_BIDS_HISTORY],
    }),

    createLot: build.mutation<TLotDetails, TCreateLotRequest>({
      query: (formData) => ({
        url: "/lots",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: [LOT_TAGS.MY_LOTS, LOT_TAGS.LIST],
      transformResponse: (response: TCreateLotResponse) => response.data,
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
  }),
});

export const {
  useCreateLotMutation,
  useGetMyLotsQuery,
  useGetLotByIdQuery,
  useGetAllLotsQuery,
  useGetMyActiveBidsQuery,
  useGetMyActiveBidsCountQuery,
  useGetMyBidsHistoryQuery,
} = lotAPI;
