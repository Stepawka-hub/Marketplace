import { baseAPI, AUTH_TAG_TYPE } from "../base";
import { TUserData } from "@/shared/types";
import {
  TGetProfileResponse,
  TUpdateProfileData,
  TUpdateProfileResponse,
} from "./types";

export const userAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getMe: build.query<TUserData, void>({
      query: () => "users/profile",
      transformResponse: (res: TGetProfileResponse) => res.data,
      providesTags: [AUTH_TAG_TYPE],
    }),

    updateProfile: build.mutation<TUpdateProfileResponse, TUpdateProfileData>({
      query: (body) => ({
        url: "users/profile",
        method: "PATCH",
        body,
      }),
      invalidatesTags: [AUTH_TAG_TYPE],
    }),

    uploadAvatar: build.mutation<
      { data: { avatar: string }; message: string },
      FormData
    >({
      query: (formData) => ({
        url: "users/profile-avatar",
        method: "PATCH",
        body: formData,
        formData: true,
      }),
      invalidatesTags: [AUTH_TAG_TYPE],
    }),
  }),
});

export const {
  useGetMeQuery,
  useUpdateProfileMutation,
  useUploadAvatarMutation,
} = userAPI;
