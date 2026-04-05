import { ReactNode } from "react";
import { NavLinkProps } from "react-router-dom";

export type TProfileMenuProps = {
  menuItems: TMenuItem[];
  footer?: ReactNode;
};

export type TMenuItem = NavLinkProps & {
  text: string;
  icon: ReactNode;
};
