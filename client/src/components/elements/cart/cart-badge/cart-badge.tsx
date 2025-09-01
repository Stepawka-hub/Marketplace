import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton, Tooltip } from "@mui/material";
import { TCartBadgeProps } from './type';

export const CartBadge: FC<TCartBadgeProps> = ({ count }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.CART);
  };

  return (
    <Tooltip title={t("cart.badge.tool-tip")}>
      <IconButton aria-label="cart" onClick={handleClick}>
        <Badge badgeContent={count} color="warning">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
};
