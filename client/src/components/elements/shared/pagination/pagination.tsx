import { FC } from "react";
import { Pagination as MuiPagination } from "@mui/material";
import { TPaginationProps } from "./types";

export const Pagination: FC<TPaginationProps> = (props) => {
  return <MuiPagination {...props} />;
};
