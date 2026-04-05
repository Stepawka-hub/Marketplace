import { MouseEvent, ReactElement } from "react";

export type TAccountMenuProps = {
  isOpen: boolean;
  anchorEl: HTMLElement | null;
  items: ReactElement;
  avatar?: string;
  initials?: string;
  onClick: (e: MouseEvent<HTMLElement>) => void;
  onClose: () => void;
};
