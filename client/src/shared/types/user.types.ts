import { USER_ROLES } from "../constants/user";

export type TUserId = string;

export type TUserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];

export type TUserData = {
  id: TUserId;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  avatar: string;
  role: TUserRole;
  createdAt: string;
  updatedAt: string;
};
