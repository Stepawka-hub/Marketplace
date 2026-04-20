import { FC } from "react";
import { useTranslation } from "react-i18next";
import { formattedWithSpace } from "@/shared/helpers";
import { PlaceBidButton, LikeButton } from "@/components/containers";
import { Box, Paper, Typography } from "@mui/material";
import { contentBoxStyle, priceStyle, wrapperStyle } from "./styles";
import { TLotPurchaseProps } from "./type";

export const LotPurchase: FC<TLotPurchaseProps> = ({
  lotId,
  sellerId,
  price,
}) => {
  const { i18n } = useTranslation();
  const formattedPrice = formattedWithSpace(price, i18n.language);

  return (
    <Paper variant="outlined" sx={wrapperStyle}>
      <Box sx={contentBoxStyle}>
        <Typography sx={priceStyle}>{formattedPrice} ₽</Typography>
        <LikeButton lotId={lotId} />
      </Box>
      <PlaceBidButton lotId={lotId} sellerId={sellerId} />
    </Paper>
  );
};
