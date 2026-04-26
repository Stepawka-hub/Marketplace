import { TApiResponse } from '@/common';
import { TUserRole } from './user.types';

export type TUserDataResponse = TApiResponse<{
  id: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  avatar: string | null;
  roles: TUserRole[];
}>;

export type TUploadAvatarResponse = TApiResponse<{
  avatar: string | null;
}>;
