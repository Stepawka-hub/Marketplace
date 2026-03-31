import { TUserRole } from "../types";

export const getRoleTranslationKey = (role: TUserRole) =>
  role === "user"
    ? "common.role.user"
    : role === "vendor"
      ? "common.role.vendor"
      : role;
