import {
  baseAPI,
  AUTH_TAG_TYPE,
  TPaginationParams,
  TPaginatedResponse,
} from "../base";
import { TUserData } from "@/shared/types";
import {
  TGetAllUsersResponse,
  TGetProfileResponse,
  TUpdateProfileData,
  TUpdateProfileResponse,
  TUpdateUserRolesPayload,
  TUpdateUserRolesResponse,
} from "./types";
import { USER_TAGS } from "./constants";

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

    getAllUsers: build.query<TGetAllUsersResponse, TPaginationParams>({
      query: (params: TPaginationParams = { page: 1, limit: 10 }) => ({
        url: "users/all",
        params: {
          page: params.page,
          limit: params.limit,
        },
      }),
      transformResponse: (response: TPaginatedResponse<TUserData>) =>
        response.data,
      providesTags: [USER_TAGS.ALL],
    }),

    updateUserRoles: build.mutation<
      TUpdateUserRolesResponse,
      TUpdateUserRolesPayload
    >({
      query: ({ userId, roles }) => ({
        url: `users/${userId}/roles`,
        method: "PATCH",
        body: { roles },
      }),
      invalidatesTags: [USER_TAGS.ALL, AUTH_TAG_TYPE],
      transformResponse: (response: TUpdateUserRolesResponse) => response,
    }),
  }),
});

export const {
  useGetMeQuery,
  useGetAllUsersQuery,
  useUpdateUserRolesMutation,
  useUpdateProfileMutation,
  useUploadAvatarMutation,
} = userAPI;
