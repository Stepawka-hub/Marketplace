import { TUserData } from "@/shared/types";

export type TUserRowProps = {
  user: TUserData;
  onEditRoles: (user: TUserData) => void;
};
