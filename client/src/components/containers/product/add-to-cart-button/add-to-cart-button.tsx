import { FC, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import { useAddToCartMutation, useGetCartItemsIdsQuery } from "@/services/cart";
import { isInArray } from "@/shared/helpers";
import { AddToCartButtonUI } from "@/components/elements";
import { TAddToCartButtonProps } from "./type";

export const AddToCartButton: FC<TAddToCartButtonProps> = ({ productId }) => {
  const navigate = useNavigate();

  const { data: cartItemsIds = [] } = useGetCartItemsIdsQuery();

  const [addToCart, { isLoading: isAdding }] = useAddToCartMutation();

  const isInCart = useMemo(
    () => isInArray(cartItemsIds, productId),
    [cartItemsIds, productId],
  );

  const handleAddToCart = () => {
    addToCart({ productId });
  };

  const handleNavigateToCart = () => {
    navigate(ROUTES.CART);
  };

  return (
    <AddToCartButtonUI
      isInCart={isInCart}
      disabled={isAdding}
      handleAction={isInCart ? handleNavigateToCart : handleAddToCart}
    />
  );
};
