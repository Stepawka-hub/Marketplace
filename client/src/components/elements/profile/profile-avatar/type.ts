import { ChangeEvent } from "react";

export type TProfileAvatarUIProps = {
  avatar?: string;
  initials?: string;
  acceptedTypes?: string;
  isLoading: boolean;
  error?: string | null;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
