import {
  baseAPI,
  TPaginationParams,
  TPaginatedResponse,
  BID_TAG_TYPE,
  TServerResponse,
} from "../base";
import { TBidListResponse, TPlaceBidPayload } from "./types";
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
      ],
      transformResponse: (response: TServerResponse<TBid>) => response.data,
    }),
  }),
});

export const { useGetLotBidsQuery, usePlaceBidMutation } = bidAPI;
