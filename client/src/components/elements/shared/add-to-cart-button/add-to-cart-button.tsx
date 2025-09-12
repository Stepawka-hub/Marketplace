import { FC } from "react";
import { TAddToCartButtonUIProps } from "./type";
import { Button } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useTranslation } from "react-i18next";

export const AddToCartButtonUI: FC<TAddToCartButtonUIProps> = ({
  isInCart,
  onAddToCart,
  onNavigateToCart,
}) => {
  const { t } = useTranslation();

  if (isInCart) {
    return (
      <Button
        variant="outlined"
        fullWidth
        startIcon={<CheckCircleIcon />}
        onClick={onNavigateToCart}
      >
        {t("product.buttons.add-to-cart")}
      </Button>
    );
  }

  return (
    <Button
      variant="contained"
      fullWidth
      startIcon={<ShoppingBasketIcon />}
      onClick={onAddToCart}
    >
      {t("product.buttons.in-cart")}
    </Button>
  );
};
