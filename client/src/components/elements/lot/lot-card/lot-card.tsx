import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CountdownTimer, LikeButton } from "@/components/containers";
import { BaseProductCard } from "@/components/elements";
import { Box, Typography, Chip, Divider } from "@mui/material";
import { ROUTES } from "@/config/routes";
import { LOT_STATUSES } from "@/shared/constants";
import { getStatusColor } from "@/shared/helpers";
import {
  chipStyle,
  dividerStyle,
  footerContainerStyle,
  priceRowStyle,
  priceTypographyStyle,
  statusRowStyle,
  timeTypographyStyle,
} from "./styles";
import { TLotCardProps } from "./type";

export const LotCard: FC<TLotCardProps> = ({
  lot,
  isShowLikeButton = true,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { id, startPrice, currentPrice, endTime, status, product } = lot;

  const displayPrice = currentPrice || startPrice;

  const handleNavigateToLotPage = () => {
    navigate(ROUTES.CATALOG_LOT(id));
  };

  const actions = (
    <>
      {isShowLikeButton && <LikeButton lotId={id} />}
      <Chip
        label={t(`lot.status.${status.toLowerCase()}`)}
        color={getStatusColor(status)}
        size="small"
        sx={chipStyle}
      />
    </>
  );

  const footer = (
    <>
      <Box sx={footerContainerStyle}>
        <Divider sx={dividerStyle} />
        <Box sx={priceRowStyle}>
          <Typography variant="body2" color="text.secondary">
            {t("lot.current-price")}:
          </Typography>
          <Typography sx={priceTypographyStyle}>{displayPrice} ₽</Typography>
        </Box>

        <Box sx={statusRowStyle}>
          {status === LOT_STATUSES.ACTIVE && (
            <>
              <Typography variant="body2" color="text.secondary">
                {t("lot.time-left")}:
              </Typography>
              <Typography sx={timeTypographyStyle}>
                <CountdownTimer targetDate={endTime} />
              </Typography>
            </>
          )}
        </Box>
      </Box>
    </>
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
