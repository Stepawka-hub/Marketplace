import { LoginForm } from "@modules/login";
import { Box } from "@mui/material";
import { FC } from "react";
import { NavLink } from "react-router-dom";

export const LoginPage: FC = () => {
  return (
    <Box sx={{ py: 3, px: { xs: 2, sm: 3, lg: 5 } }}>
      <LoginForm />
      <NavLink to="/register">Нет аккаунта? Зарегистрироваться</NavLink>
    </Box>
  );
};
