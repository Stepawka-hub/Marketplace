import { TPaginatedResponse, TServerResponse } from "../base";
import { TUserData, TUserRole } from "@/shared/types";

export type TGetProfileResponse = TServerResponse<TUserData>;

export type TUpdateProfileData = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  password?: string;
};

export type TUpdateProfileResponse = {
  data: TUserData;
  message: string;
  statusCode: number;
};

export type TGetAllUsersResponse = TPaginatedResponse<TUserData>["data"];

export type TUpdateUserRolesPayload = {
  userId: string;
  roles: TUserRole[];
};

export type TUpdateUserRolesResponse = TServerResponse<{
  userId: string;
  roles: TUserRole[];
}>;
