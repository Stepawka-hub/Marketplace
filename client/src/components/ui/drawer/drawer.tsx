import { Drawer as MuiDrawer, styled } from "@mui/material";

export const Drawer = styled(MuiDrawer)(({ theme }) => ({
  height: "100%",
  transition: "width .3s",
  ".MuiDrawer-paper": {
    position: "relative",
    border: "1px solid",
    borderColor: theme.palette.divider,
    borderRadius: "0 1rem 0 0",
    backgroundColor: theme.palette.custom.primary.main,
    overflowX: "hidden",
    backgroundImage: "none",
  },
}));
