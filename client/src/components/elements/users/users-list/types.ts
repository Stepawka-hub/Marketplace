import { TUserData } from "@/shared/types";

export type TUsersListUIProps = {
  users: TUserData[];
  isLoading: boolean;
  onEditRoles: (user: TUserData) => void;
};
