import { AppBar as AppBarMui, styled } from "@mui/material";

export const AppBar = styled(AppBarMui)(({ theme }) => {
  const { custom } = theme.palette;
  return {
    "& .MuiIconButton-root": {
      color: custom.appBar.iconColor,
      "&:hover": {
        backgroundColor: custom.appBar.iconHover,
      },
    },
  };
});
