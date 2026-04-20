import { Drawer as MuiDrawer, styled } from "@mui/material";

export const Drawer = styled(MuiDrawer)(({ theme }) => ({
  maxHeight: "100vh",
  height: "100%",
  transition: "width .3s",
  ".MuiDrawer-paper": {
    position: "relative",
    border: "1px solid",
    borderColor: theme.palette.divider,
    borderRadius: "1rem",
    backgroundColor: theme.palette.custom.primary.main,
    overflowX: "hidden",
    backgroundImage: "none",

    [theme.breakpoints.down("md")]: {
      borderRadius: "0 1rem 1rem 0",
    },
  },
}));
