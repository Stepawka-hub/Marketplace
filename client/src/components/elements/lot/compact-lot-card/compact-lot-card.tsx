import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography, Chip, Divider, CardMedia } from "@mui/material";
import { formatTimeLeft, getStatusColor } from "@/shared/helpers";
import { LOT_STATUSES } from "@/shared/constants";
import {
  compactCardContainer,
  compactCardImage,
  compactCardRight,
  compactCardContent,
  compactCardFooter,
  compactCardStyle,
  compactChipStyle,
  compactNameStyle,
} from "./styles";
import { TCompactLotCard } from "./type";

export const CompactLotCard: FC<TCompactLotCard> = ({ lot }) => {
  const { t } = useTranslation();
  const { product, startPrice, currentPrice, endTime, status } = lot;

  const displayPrice = currentPrice || startPrice;

  return (
    <Box sx={compactCardStyle}>
      <Box sx={compactCardContainer}>
        <CardMedia
          component="img"
          image={product.preview}
          alt={product.name}
          sx={compactCardImage}
        />

        <Box sx={compactCardRight}>
          <Box sx={compactCardContent}>
            <Typography variant="subtitle1" sx={compactNameStyle}>
              {product.name}
            </Typography>

            <Chip
              label={t(`lot.status.${status.toLowerCase()}`)}
              size="small"
              color={getStatusColor(status)}
              sx={compactChipStyle}
            />
          </Box>

          <Divider />

          <Box sx={compactCardFooter}>
            <Box>
              <Typography variant="caption" color="text.secondary">
                Текущая цена:
              </Typography>
              <Typography variant="body2">{displayPrice} ₽</Typography>
            </Box>

            {status === LOT_STATUSES.ACTIVE && (
              <Typography variant="caption" color="warning.main">
                {formatTimeLeft(endTime)}
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
