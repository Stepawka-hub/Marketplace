import { Box, styled } from '@mui/material';

export const SliderBox = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "60vh",
  overflow: "hidden",
  borderRadius: "1rem",
  cursor: "pointer",
  "&:hover .MuiIconButton-root": {
    opacity: 1,
  },
  [theme.breakpoints.down("sm")]: {
    height: "50vh",
  },
}));