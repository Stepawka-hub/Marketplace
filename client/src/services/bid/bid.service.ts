import {
  baseAPI,
  TPaginationParams,
  TPaginatedResponse,
  BID_TAG_TYPE,
  TServerResponse,
  AUTH_TAG_TYPE,
} from "../base";
import { LOT_TAGS } from "../lot";
import {
  TAutoBid,
  TAutoBidActionPayload,
  TBidListResponse,
  TPlaceAutoBidPayload,
  TPlaceBidPayload,
} from "./types";
import { TBid } from "@/shared/types";

export const bidAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getLotBids: build.query<
      TBidListResponse,
      { lotId: string; params?: TPaginationParams }
    >({
      query: ({ lotId, params = { page: 1, limit: 10 } }) => ({
        url: `/lots/${lotId}/bids`,
        params: {
          page: params.page,
          limit: params.limit,
        },
      }),
      transformResponse: (response: TPaginatedResponse<TBid>) => response.data,
      providesTags: (_, __, { lotId }) => [{ type: BID_TAG_TYPE, id: lotId }],
    }),

    placeBid: build.mutation<TBid, TPlaceBidPayload>({
      query: ({ lotId, amount }) => ({
        url: `/lots/${lotId}/bids`,
        method: "POST",
        body: { amount },
      }),
      invalidatesTags: (_, __, { lotId }) => [
        { type: BID_TAG_TYPE, id: lotId },
        { type: LOT_TAGS.DETAIL.type, id: lotId },
        AUTH_TAG_TYPE,
      ],
      transformResponse: (response: TServerResponse<TBid>) => response.data,
    }),

    enableAutoBid: build.mutation<TAutoBid, TPlaceAutoBidPayload>({
      query: ({ lotId, maxAmount }) => ({
        url: `/lots/${lotId}/bids/auto`,
        method: "POST",
        body: { maxAmount },
      }),
      invalidatesTags: (_, __, { lotId }) => [
        { type: BID_TAG_TYPE, id: lotId },
        { type: LOT_TAGS.DETAIL.type, id: lotId },
        AUTH_TAG_TYPE,
      ],
      transformResponse: (response: TServerResponse<TAutoBid>) => response.data,
    }),

    disableAutoBid: build.mutation<void, TAutoBidActionPayload>({
      query: ({ lotId }) => ({
        url: `/lots/${lotId}/bids/auto`,
        method: "DELETE",
      }),
      invalidatesTags: (_, __, { lotId }) => [
        { type: BID_TAG_TYPE, id: lotId },
        { type: LOT_TAGS.DETAIL.type, id: lotId },
        AUTH_TAG_TYPE,
      ],
    }),

    getUserAutoBid: build.query<TAutoBid | null, TAutoBidActionPayload>({
      query: ({ lotId }) => ({
        url: `/lots/${lotId}/bids/auto`,
      }),
      providesTags: (_, __, { lotId }) => [{ type: BID_TAG_TYPE, id: lotId }],
      transformResponse: (response: TServerResponse<TAutoBid | null>) =>
        response.data,
    }),
  }),
});

export const {
  useGetLotBidsQuery,
  usePlaceBidMutation,
  useEnableAutoBidMutation,
  useDisableAutoBidMutation,
  useGetUserAutoBidQuery,
} = bidAPI;
