import { TUserRole } from '@/shared/types';

export type TUserRolesModalProps = {
  open: boolean;
  userId: string;
  userName: string;
  currentRoles: TUserRole[];
  allRoles: TUserRole[];
  onClose: () => void;
  onSave: (userId: string, roles: TUserRole[]) => void;
};