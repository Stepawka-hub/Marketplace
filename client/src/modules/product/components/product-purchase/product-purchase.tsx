import { AddToCartButton } from "@components/add-to-cart-button";
import { LikeButton } from "@components/like-button";
import { Box, Paper, Typography } from "@mui/material";
import { formattedWithSpace } from "@shared/helpers/numbers";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { ProductPurchaseProps } from "./type";

export const ProductPurchase: FC<ProductPurchaseProps> = ({
  isInCart,
  isInFavorites,
  price,
  addToCart,
  addToFavorites,
}) => {
  const { t, i18n } = useTranslation();
  const formattedPrice = formattedWithSpace(price, i18n.language);

  return (
    <Paper variant="outlined" sx={{ p: 2, backgroundColor: "custom.primary" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography sx={{ fontSize: "2rem", fontWeight: 600 }}>
          {formattedPrice} ₽
        </Typography>
        <LikeButton
          isActive={isInFavorites}
          title={
            isInFavorites
              ? t("product.buttons.remove-from-favorites")
              : t("product.buttons.add-to-favorites")
          }
          callback={addToFavorites}
        />
      </Box>
      <AddToCartButton isInCart={isInCart} addToCart={addToCart} />
    </Paper>
  );
};
