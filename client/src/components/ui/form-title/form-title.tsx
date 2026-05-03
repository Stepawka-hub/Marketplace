import { Typography, styled } from "@mui/material";

export const FormTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  textAlign: "center",
  fontSize: "1.25rem",

  [theme.breakpoints.up("sm")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2rem",
  },
}));
