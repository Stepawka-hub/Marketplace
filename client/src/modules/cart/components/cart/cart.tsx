import { getCartTotalItems } from "@modules/cart/services/slices/cart";
import { Box, Grid, Typography } from "@mui/material";
import { useSelector } from "@store/types";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { CartList } from "../cart-list";
import { CartSummary } from "../cart-summary";
import { EmptyCart } from "../empty-cart";

export const Cart: FC = () => {
  const { t } = useTranslation();
  const totalCount = useSelector(getCartTotalItems);

  return (
    <Box>
      <Typography variant="h2" fontSize="2rem" fontWeight="600">
        {t("cart.title")}
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {totalCount ? (
          <>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 8 }}>
              <CartList />
            </Grid>
            <Grid flexGrow={1}>
              <CartSummary />
            </Grid>
          </>
        ) : (
          <EmptyCart />
        )}
      </Grid>
    </Box>
  );
};
