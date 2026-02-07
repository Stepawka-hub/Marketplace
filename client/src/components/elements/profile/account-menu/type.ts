import { MouseEvent, ReactNode } from "react";

export type TAccountMenuProps = {
  isOpen: boolean;
  anchorEl: HTMLElement | null;
  items: ReactNode;
  onClick: (e: MouseEvent<HTMLElement>) => void;
  onClose: () => void;
};
