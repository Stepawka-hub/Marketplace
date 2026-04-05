import { FC } from "react";
import { useTranslation } from "react-i18next";
import GavelIcon from "@mui/icons-material/Gavel";
import { Badge, IconButton, Tooltip } from "@mui/material";
import { TBidsBadgeUIProps } from "./type";

export const BidsBadgeUI: FC<TBidsBadgeUIProps> = ({ count, onClick }) => {
  const { t } = useTranslation();

  return (
    <Tooltip title={t("bids.badge.tool-tip")}>
      <IconButton aria-label="bids" onClick={onClick}>
        <Badge badgeContent={count} color="warning">
          <GavelIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
};
