import { PropsWithChildren } from "react";

export type TModalProps = PropsWithChildren<{
  isOpen: boolean;
  title?: string;
  onClose: () => void;
}>;