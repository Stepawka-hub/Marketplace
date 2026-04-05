import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Box, Paper, Typography } from "@mui/material";
import { TProductPurchaseProps } from "./type";
import { contentBoxStyle, priceStyle, wrapperStyle } from "./styles";
import { PlaceBidButton, LikeButton } from "@/components/containers";
import { formattedWithSpace } from "@/shared/helpers";

export const ProductPurchase: FC<TProductPurchaseProps> = ({
  productId,
  price,
}) => {
  const { i18n } = useTranslation();
  const formattedPrice = formattedWithSpace(price, i18n.language);

  return (
    <Paper variant="outlined" sx={wrapperStyle}>
      <Box sx={contentBoxStyle}>
        <Typography sx={priceStyle}>{formattedPrice} ₽</Typography>
        <LikeButton productId={productId} />
      </Box>
      <PlaceBidButton productId={productId} />
    </Paper>
  );
};
