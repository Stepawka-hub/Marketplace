import { FC } from "react";
import { useTranslation } from "react-i18next";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton, Tooltip } from "@mui/material";
import { TCartBadgeUIProps } from "./type";

export const CartBadgeUI: FC<TCartBadgeUIProps> = ({ count, onClick }) => {
  const { t } = useTranslation();

  return (
    <Tooltip title={t("cart.badge.tool-tip")}>
      <IconButton aria-label="cart" onClick={onClick}>
        <Badge badgeContent={count} color="warning">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
};
