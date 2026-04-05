import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useGetCartCountQuery } from "@/services/cart";
import { CartList, CartSummary } from "@/components/containers";
import { EmptyCartUI } from "@/components/elements";
import { Loader } from "@/components/ui";
import { Box, Grid, Typography } from "@mui/material";
import { gridContainerStyle, titleStyle } from "./styles";

export const Cart: FC = () => {
  const { t } = useTranslation();
  const { data: totalItems = 0, isLoading } = useGetCartCountQuery();

  if (isLoading) {
    return <Loader />;
  }

  const containerContent =
    totalItems > 0 ? (
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
    );

  return (
    <Box>
      <Typography variant="h2" sx={titleStyle}>
        {t("cart.title")}
      </Typography>

      <Grid container sx={gridContainerStyle}>
        {containerContent}
      </Grid>
    </Box>
  );
};
