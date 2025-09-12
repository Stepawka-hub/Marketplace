import { GridSize } from "@mui/material";
import { ReactNode } from "react";

export type CenteredGridProps = {
  children: ReactNode;
  size?: {
    xs?: GridSize;
    sm?: GridSize;
    md?: GridSize;
    lg?: GridSize;
    xl?: GridSize;
  };
};
