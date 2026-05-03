import { TUserRole } from "@/shared/types";

export type TSelectedUser = {
  id: string;
  name: string;
  roles: TUserRole[];
};
