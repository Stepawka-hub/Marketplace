import { FC } from "react";
import { Pagination as MuiPagination } from "@mui/material";
import { paginationStyle } from "./styles";
import { TPaginationProps } from "./types";

export const Pagination: FC<TPaginationProps> = ({ count, ...props }) => {
  return (
    <>
      {!!count && (
        <MuiPagination
          size="large"
          count={count}
          sx={paginationStyle}
          {...props}
        />
      )}
    </>
  );
};
