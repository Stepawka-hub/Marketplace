import { FC, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AddToCartButtonUI } from "@/components/elements";
import { ROUTES } from "@/config/routes";
import { AddToCartButtonProps } from "./type";

export const AddToCartButton: FC<AddToCartButtonProps> = ({
  isInCart,
  addToCart,
}) => {
  const navigate = useNavigate();

  const handleAddToCart = (e: MouseEvent) => {
    e.stopPropagation();
    addToCart();
  };

  const handleNavigateToCart = (e: MouseEvent) => {
    e.stopPropagation();
    navigate(ROUTES.CART);
  };

  return (
    <AddToCartButtonUI
      isInCart={isInCart}
      onAddToCart={handleAddToCart}
      onNavigateToCart={handleNavigateToCart}
    />
  );
};
