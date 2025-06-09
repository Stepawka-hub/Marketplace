import { Box, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { CartList } from "../cart-list";
import { CartSummary } from "../cart-summary";
import { useTranslation } from "react-i18next";

export const Cart: FC = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: 3, px: 5 }}>
      <Typography variant="h2" fontSize="2rem" fontWeight="600">
        {t("cart.title")}
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid size={9}>
          <CartList />
        </Grid>
        <Grid flexGrow={1}>
          <CartSummary />
        </Grid>
      </Grid>
    </Box>
  );
};
