import { RefObject } from "react";
import { TLanguage } from "@/shared/types";

export type TLanguageSwitcherUIProps = {
  value: TLanguage;
  anchorRef: RefObject<HTMLButtonElement | null>;
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  handleClick: (v: TLanguage) => void;
};
