import { ReactNode } from "react";

export type TBaseProductCardProps = {
  name: string;
  shortDescription: string;
  preview: string | null;
  seller: {
    firstName: string;
    lastName: string;
  };
  actions?: ReactNode;
  footer?: ReactNode;
  handleClick?: () => void;
};
