import { USER_ROLES } from "../constants/user";
import { TUserRole } from "../types";

export const isVendor = (roles: TUserRole[]) =>
  roles.some((role) => role === USER_ROLES.VENDOR);

export const isModerator = (roles: TUserRole[]) =>
  roles.some(
    (role) => role === USER_ROLES.MODERATOR || role === USER_ROLES.ADMIN,
  );
