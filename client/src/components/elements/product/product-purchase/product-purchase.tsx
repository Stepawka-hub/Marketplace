import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Box, Paper, Typography } from "@mui/material";
import { TProductPurchaseProps } from "./type";
import { contentBoxStyle, priceStyle, wrapperStyle } from "./styles";
import { AddToCartButton } from "@/components/containers";
import { formattedWithSpace } from "@/shared/helpers";
import { LikeButton } from '@/components/elements';

export const ProductPurchase: FC<TProductPurchaseProps> = ({
  isInCart,
  isInFavorites,
  price,
  addToCart,
  toggleFavorite,
}) => {
  const { t, i18n } = useTranslation();
  const formattedPrice = formattedWithSpace(price, i18n.language);

  return (
    <Paper variant="outlined" sx={wrapperStyle}>
      <Box sx={contentBoxStyle}>
        <Typography sx={priceStyle}>{formattedPrice} ₽</Typography>
        <LikeButton
          isActive={isInFavorites}
          title={
            isInFavorites
              ? t("product.buttons.remove-from-favorites")
              : t("product.buttons.add-to-favorites")
          }
          handleClick={toggleFavorite}
        />
      </Box>
      <AddToCartButton isInCart={isInCart} addToCart={addToCart} />
    </Paper>
  );
};
