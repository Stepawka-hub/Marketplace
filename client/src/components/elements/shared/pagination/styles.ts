import { SxProps, Theme } from "@mui/material";

export const paginationStyle: SxProps<Theme> = {
  mt: 3.5,
  "& .MuiPagination-ul": {
    justifyContent: 'center'
  }
} as const;
