import { baseAPI, TServerResponse } from "../base";
import { SELLER_REQUESTS_TAGS } from "./constants";
import { TSellerRequest } from "@/shared/types";
import {
  TCreateSellerRequestPayload,
  TUpdateSellerRequestPayload,
} from "./types";

export const sellerRequestsAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    createSellerRequest: build.mutation<
      TSellerRequest,
      TCreateSellerRequestPayload
    >({
      query: (body) => ({
        url: "/seller-requests",
        method: "POST",
        body,
      }),
      invalidatesTags: [SELLER_REQUESTS_TAGS.MY_REQUESTS],
      transformResponse: (response: TServerResponse<TSellerRequest>) =>
        response.data,
    }),

    getMySellerRequests: build.query<TSellerRequest[], void>({
      query: () => ({
        url: "/seller-requests/my",
      }),
      providesTags: [SELLER_REQUESTS_TAGS.MY_REQUESTS],
      transformResponse: (response: TServerResponse<TSellerRequest[]>) =>
        response.data,
    }),

    getAllSellerRequests: build.query<TSellerRequest[], void>({
      query: () => ({
        url: "/seller-requests",
      }),
      providesTags: [SELLER_REQUESTS_TAGS.ALL_REQUESTS],
      transformResponse: (response: TServerResponse<TSellerRequest[]>) =>
        response.data,
    }),

    updateSellerRequestStatus: build.mutation<
      TSellerRequest,
      TUpdateSellerRequestPayload
    >({
      query: ({ id, status, rejectionReason }) => ({
        url: `/seller-requests/${id}`,
        method: "PATCH",
        body: { status, rejectionReason },
      }),
      invalidatesTags: [
        SELLER_REQUESTS_TAGS.ALL_REQUESTS,
        SELLER_REQUESTS_TAGS.MY_REQUESTS,
      ],
      transformResponse: (response: TServerResponse<TSellerRequest>) =>
        response.data,
    }),
  }),
});

export const {
  useCreateSellerRequestMutation,
  useGetMySellerRequestsQuery,
  useGetAllSellerRequestsQuery,
  useUpdateSellerRequestStatusMutation,
} = sellerRequestsAPI;
