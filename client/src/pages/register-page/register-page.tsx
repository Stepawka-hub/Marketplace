import { RegisterForm } from "@modules/register";
import { Box } from "@mui/material";
import { FC } from "react";
import { NavLink } from "react-router-dom";

export const RegisterPage: FC = () => {
  return (
    <Box sx={{ py: 3, px: { xs: 2, sm: 3, lg: 5 } }}>
      <RegisterForm />
      <NavLink to="/login">Уже есть аккаунт? Войти</NavLink>
    </Box>
  );
};
