import { baseAPI } from "../base/base.service";
import { AUTH_TAG_TYPE } from "../auth";
import { TUserData } from "@/shared/types";

export const userAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getMe: build.query<TUserData, void>({
      query: () => "users/@me",
      providesTags: [AUTH_TAG_TYPE],
    }),
  }),
});

export const { useGetMeQuery } = userAPI;
