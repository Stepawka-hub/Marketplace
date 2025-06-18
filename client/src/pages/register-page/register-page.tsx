import { RegisterForm } from "@modules/register";
import { Box } from "@mui/material";
import { FC } from "react";

export const RegisterPage: FC = () => {
  return (
    <Box sx={{ py: 3, px: { xs: 2, sm: 3, lg: 5 } }}>
      <RegisterForm />
    </Box>
  );
};
