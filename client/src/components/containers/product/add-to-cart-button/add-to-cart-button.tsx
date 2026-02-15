import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import { AddToCartButtonUI } from "@/components/elements";
import { TAddToCartButtonProps } from "./type";

export const AddToCartButton: FC<TAddToCartButtonProps> = ({ productId }) => {
  const navigate = useNavigate();
  const isInCart = false;

  // const isInCart = useCallback(
  //   (productId: string) => isInArray(cartItemsIds, productId),
  //   [cartItemsIds],
  // );

  const handleAddToCart = () => {};

  const handleNavigateToCart = () => {
    navigate(ROUTES.CART);
  };

  return (
    <AddToCartButtonUI
      isInCart={isInCart}
      handleAction={isInCart ? handleNavigateToCart : handleAddToCart}
    />
  );
};
