import { TUserData } from '@/shared/types';

export type TEditProfileModalProps = {
  isOpen: boolean;
  userData: TUserData;
  onSuccess: () => void;
  onClose: () => void;
};

export type TEditProfileFormData = {
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
  confirmPassword: string;
};
