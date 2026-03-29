import { FC, MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { TAddToCartButtonUIProps } from "./type";

export const AddToCartButtonUI: FC<TAddToCartButtonUIProps> = ({
  isInCart,
  disabled,
  handleAction,
}) => {
  const { t } = useTranslation();

  const onClick = (e: MouseEvent) => {
    e.stopPropagation();
    handleAction();
  };

  return (
    <Button
      variant={isInCart ? "outlined" : "contained"}
      fullWidth
      startIcon={isInCart ? <CheckCircleIcon /> : <ShoppingBasketIcon />}
      disabled={disabled}
      onClick={onClick}
    >
      {isInCart
        ? t("product.buttons.in-cart")
        : t("product.buttons.add-to-cart")}
    </Button>
  );
};
