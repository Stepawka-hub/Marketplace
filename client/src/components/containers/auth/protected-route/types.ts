import { TUserRole } from '@/shared/types';

export type TProtectedRouteProps = {
  onlyUnAuth?: boolean;
  allowedRoles?: TUserRole[];
  redirectTo?: string;
}