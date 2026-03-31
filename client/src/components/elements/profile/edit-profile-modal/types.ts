import { PropsWithChildren } from "react";

export type TEditProfileModalUIProps = PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
}>;