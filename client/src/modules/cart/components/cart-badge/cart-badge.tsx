import { getCartTotalItems } from "@modules/cart/services/slices/cart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton, Tooltip } from "@mui/material";
import { useSelector } from "@store/types";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const CartBadge: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const count = useSelector(getCartTotalItems);

  const handleClick = () => {
    navigate("/cart");
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
