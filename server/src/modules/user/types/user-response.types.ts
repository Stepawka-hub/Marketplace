import { TApiResponse } from '@/common';

export type TUserDataResponse = TApiResponse<{
  id: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  avatar: string | null;
  role: string;
}>;

export type TUploadAvatarResponse = TApiResponse<{
  avatar: string | null;
}>;
