import { TUserData } from "@/shared/types";
import { TServerResponse } from "../base";

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
