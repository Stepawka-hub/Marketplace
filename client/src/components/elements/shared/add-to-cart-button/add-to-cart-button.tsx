import { FC, MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { TAddToCartButtonUIProps } from "./type";

export const AddToCartButtonUI: FC<TAddToCartButtonUIProps> = ({
  isInCart,
  handleAction,
}) => {
  const { t } = useTranslation();

  const onClick = (e: MouseEvent) => {
    e.stopPropagation();
    handleAction();
  };

  return (
    <Button
      variant={isInCart ? "contained" : "outlined"}
      fullWidth
      startIcon={isInCart ? <CheckCircleIcon /> : <ShoppingBasketIcon />}
      onClick={onClick}
    >
      {isInCart
        ? t("product.buttons.add-to-cart")
        : t("product.buttons.in-cart")}
    </Button>
  );
};
