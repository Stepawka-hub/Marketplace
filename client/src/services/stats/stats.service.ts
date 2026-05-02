import { baseAPI, TServerResponse } from "../base";
import { STATS_TAGS } from "./constants";
import { TLotsDistributionData, TStatsSummary } from "@/shared/types";
import { TRegistrationsResponse } from "./types";

export const statsAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getSummary: build.query<TStatsSummary, void>({
      query: () => "/admin/stats/summary",
      transformResponse: (response: TServerResponse<TStatsSummary>) =>
        response.data,
      providesTags: [STATS_TAGS.ALL],
    }),

    getRegistrations: build.query<TRegistrationsResponse, number>({
      query: (days = 7) => `/admin/stats/registrations?days=${days}`,
      transformResponse: (response: TServerResponse<TRegistrationsResponse>) =>
        response.data,
      providesTags: [STATS_TAGS.ALL],
    }),

    getLotsDistribution: build.query<TLotsDistributionData, void>({
      query: () => "/admin/stats/lots-distribution",
      transformResponse: (response: TServerResponse<TLotsDistributionData>) =>
        response.data,
      providesTags: [STATS_TAGS.ALL],
    }),
  }),
});

export const {
  useGetSummaryQuery,
  useGetRegistrationsQuery,
  useGetLotsDistributionQuery,
} = statsAPI;
