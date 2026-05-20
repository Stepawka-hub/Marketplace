import { FC } from "react";
import { useTranslation } from "react-i18next";
import { formattedWithSpace } from "@/shared/helpers";
import {
  PlaceBidButton,
  LikeButton,
  EnableAutoBidButton,
} from "@/components/containers";
import { Box, Paper, Typography } from "@mui/material";
import { actionsContainerStyle, contentBoxStyle, priceStyle, wrapperStyle } from "./styles";
import { TLotPurchaseProps } from "./type";
import { DisableAutoBidButton } from "@/components/containers";

export const LotPurchase: FC<TLotPurchaseProps> = ({
  lotId,
  sellerId,
  currentWinnerId,
  price,
  minBidIncrement,
  hasAutoBid = false,
}) => {
  const { i18n } = useTranslation();
  const formattedPrice = formattedWithSpace(price, i18n.language);

  return (
    <Paper variant="outlined" sx={wrapperStyle}>
      <Box sx={contentBoxStyle}>
        <Typography sx={priceStyle}>{formattedPrice} ₽</Typography>
        <LikeButton lotId={lotId} />
      </Box>
      <Box sx={actionsContainerStyle}>
        <PlaceBidButton
          lotId={lotId}
          sellerId={sellerId}
          currentWinnerId={currentWinnerId}
          currentPrice={price}
          minBidIncrement={minBidIncrement}
        />
        {hasAutoBid ? (
          <DisableAutoBidButton lotId={lotId} />
        ) : (
          <EnableAutoBidButton
            lotId={lotId}
            sellerId={sellerId}
            currentWinnerId={currentWinnerId}
            currentPrice={price}
            minBidIncrement={minBidIncrement}
          />
        )}
      </Box>
    </Paper>
  );
};
