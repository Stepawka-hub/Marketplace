import { TTheme } from "@/shared/types";
import { RefObject } from "react";

export type TThemeSwitcherUIProps = {
  value: TTheme;
  anchorRef: RefObject<HTMLButtonElement | null>;
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  handleClick: (v: TTheme) => void;
};
