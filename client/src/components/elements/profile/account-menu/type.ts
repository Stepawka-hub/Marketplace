import { MouseEvent, ReactElement } from "react";

export type TAccountMenuProps = {
  isOpen: boolean;
  anchorEl: HTMLElement | null;
  items: ReactElement;
  onClick: (e: MouseEvent<HTMLElement>) => void;
  onClose: () => void;
};
