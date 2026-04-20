import { USER_ROLES } from "../constants/user";
import { TUserRole } from "../types";

export const isVendor = (role: TUserRole) =>
  role === USER_ROLES.VENDOR || role === USER_ROLES.ADMIN;
