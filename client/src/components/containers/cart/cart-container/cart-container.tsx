import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "@/store";
import { getCartTotalItems } from "@/store/slices/cart";
import { Box, Grid, Typography } from "@mui/material";
import { gridContainerStyle, titleStyle } from "./styles";
import { EmptyCartUI } from "@/components/elements";
import { CartList, CartSummary } from "@/components/containers";

export const CartContainer: FC = () => {
  const { t } = useTranslation();
  const totalCount = useSelector(getCartTotalItems);

  return (
    <Box>
      <Typography variant="h2" sx={titleStyle}>
        {t("cart.title")}
      </Typography>

      <Grid container sx={gridContainerStyle}>
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
          <EmptyCartUI />
        )}
      </Grid>
    </Box>
  );
};
