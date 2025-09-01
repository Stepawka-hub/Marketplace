import { FC, MouseEvent } from "react";
import { AddToCartButtonProps } from "./type";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ROUTES } from "@/config/routes";

export const AddToCartButton: FC<AddToCartButtonProps> = ({
  isInCart,
  addToCart,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleAddToCart = (e: MouseEvent) => {
    e.stopPropagation();
    addToCart();
  };

  const handleNavigateToCart = (e: MouseEvent) => {
    e.stopPropagation();
    navigate(ROUTES.CART);
  };

  return isInCart ? (
    <Button
      variant="outlined"
      fullWidth
      startIcon={<CheckCircleIcon />}
      onClick={handleNavigateToCart}
    >
      {t("product.buttons.in-cart")}
    </Button>
  ) : (
    <Button
      variant="contained"
      fullWidth
      startIcon={<ShoppingBasketIcon />}
      onClick={handleAddToCart}
    >
      {t("product.buttons.add-to-cart")}
    </Button>
  );
};
