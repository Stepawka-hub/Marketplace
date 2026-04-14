import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Chip, Divider, CardMedia } from "@mui/material";
import { formatTimeLeft, getStatusColor } from "@/shared/helpers";
import { ROUTES } from "@/config/routes";
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
  timeStyle,
  priceStyle,
} from "./styles";
import { TCompactLotCard } from "./type";

export const CompactLotCard: FC<TCompactLotCard> = ({ lot }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { id, product, startPrice, currentPrice, endTime, status } = lot;
  const displayPrice = currentPrice || startPrice;

  const handleNavigateToLotPage = () => {
    navigate(ROUTES.CATALOG_LOT(id));
  };

  return (
    <Box sx={compactCardStyle} onClick={handleNavigateToLotPage}>
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
                {t("lot.current-price")}:
              </Typography>
              <Typography sx={priceStyle}>{displayPrice} ₽</Typography>
            </Box>

            {status === LOT_STATUSES.ACTIVE && (
              <Typography sx={timeStyle}>{formatTimeLeft(endTime)}</Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
