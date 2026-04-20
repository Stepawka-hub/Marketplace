import { ChangeEvent } from "react";

export type TProfileAvatarUIProps = {
  avatar?: string;
  firstName?: string;
  lastName?: string;
  acceptedTypes?: string;
  isLoading: boolean;
  error?: string | null;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
