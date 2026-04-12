import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LikeButton } from "@/components/containers";
import { BaseProductCard } from "@/components/elements";
import { Box, Typography, Chip } from "@mui/material";
import { ROUTES } from "@/config/routes";
import { LOT_STATUSES } from "@/shared/constants";
//import { formatTimeLeft } from "./helpers";
import { TLotCardProps } from "./type";
import { footerContainerStyle, priceRowStyle, statusRowStyle } from "./styles";

export const LotCard: FC<TLotCardProps> = ({
  lot,
  isShowLikeButton = true,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const {
    id,
    startPrice,
    currentPrice,
    minBidIncrement,
    endTime,
    status,
    product,
  } = lot;

  const timeLeft = endTime; // formatTimeLeft
  const displayPrice = currentPrice || startPrice;

  const handleNavigateToLotPage = () => {
    navigate(ROUTES.CATALOG_LOT(id));
  };

  const getStatusColor = () => {
    switch (status) {
      case LOT_STATUSES.ACTIVE:
        return "success";
      case LOT_STATUSES.DRAFT:
        return "default";
      case LOT_STATUSES.COMPLETED:
        return "info";
      case LOT_STATUSES.CANCELLED:
        return "error";
      case LOT_STATUSES.EXPIRED:
        return "warning";
      default:
        return "default";
    }
  };

  const actions = <>{isShowLikeButton && <LikeButton lotId={id} />}</>;

  const footer = (
    <Box sx={footerContainerStyle}>
      <Box sx={priceRowStyle}>
        <Typography variant="body2" color="text.secondary">
          {t("lot.current-price")}:
        </Typography>
        <Typography variant="body1" fontWeight="bold">
          {displayPrice} ₽
        </Typography>
      </Box>

      <Box sx={priceRowStyle}>
        <Typography variant="body2" color="text.secondary">
          {t("lot.min-bid-increment")}:
        </Typography>
        <Typography variant="body2">{minBidIncrement} ₽</Typography>
      </Box>

      <Box sx={statusRowStyle}>
        <Chip
          label={t(`lot.status.${status.toLowerCase()}`)}
          color={getStatusColor()}
          size="small"
        />
        {status === LOT_STATUSES.ACTIVE && (
          <Typography variant="caption" color="text.secondary">
            {t("lot.time-left")}: {timeLeft}
          </Typography>
        )}
      </Box>
    </Box>
  );

  return (
    <BaseProductCard
      name={product.name}
      shortDescription={product.shortDescription}
      preview={product.preview}
      seller={product.seller}
      actions={actions}
      footer={footer}
      handleClick={handleNavigateToLotPage}
    />
  );
};
