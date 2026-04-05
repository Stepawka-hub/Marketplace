import { TUserRole } from "@/shared/types";

export type TProfileDataUIProps = {
  firstName: string;
  lastName: string;
  avatar?: string;
  email: string;
  phone?: string;
  role: TUserRole;
  onEditButtonClick: () => void;
};
