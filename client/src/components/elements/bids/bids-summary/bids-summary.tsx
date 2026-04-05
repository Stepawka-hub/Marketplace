import { FC } from "react";
import { useTranslation } from "react-i18next";
import { formattedWithSpace } from "@/shared/helpers";
import { Box, Typography } from "@mui/material";
import { containerStyle, priceBoxStyle, textStyle, titleStyle } from "./styles";
import { TBidsSummaryPropsUI } from "./type";

export const BidsSummaryUI: FC<TBidsSummaryPropsUI> = ({
  totalCount,
  totalPrice,
}) => {
  const { t, i18n } = useTranslation();
  const formattedPrice = formattedWithSpace(totalPrice, i18n.language);

  return (
    <Box sx={containerStyle}>
      <Typography sx={titleStyle}>{t("bids.summary.information")}</Typography>

      <Box sx={priceBoxStyle}>
        <Typography sx={textStyle}>
          {t("bids.summary.products", { count: totalCount })}
        </Typography>
        <Typography sx={textStyle}>{`${formattedPrice} ₽`}</Typography>
      </Box>
    </Box>
  );
};
