import { AppBar as AppBarMui, styled } from '@mui/material';

export const AppBar = styled(AppBarMui)(({ theme }) => ({
  '& .MuiIconButton-root': {
    color: theme.palette.appBar.iconColor,
    '&:hover': {
      backgroundColor: theme.palette.appBar.iconHover,
    },
  },
}));