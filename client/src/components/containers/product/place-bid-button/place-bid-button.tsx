import { FC, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import { useAddToCartMutation, useGetCartItemsIdsQuery } from "@/services/cart";
import { isInArray } from "@/shared/helpers";
import { PlaceBidButtonUI } from "@/components/elements";
import { TPlaceBidButtonProps } from "./type";

export const PlaceBidButton: FC<TPlaceBidButtonProps> = ({ productId }) => {
  const navigate = useNavigate();

  const { data: bidIds = [] } = useGetCartItemsIdsQuery();

  const [addToCart, { isLoading: isAdding }] = useAddToCartMutation();

  const isPlaced = useMemo(
    () => isInArray(bidIds, productId),
    [bidIds, productId],
  );

  const handlePlaceBid = () => {
    addToCart({ productId });
  };

  const handleNavigateToCart = () => {
    navigate(ROUTES.CART);
  };

  return (
    <PlaceBidButtonUI
      isPlaced={isPlaced}
      disabled={isAdding}
      handleAction={isPlaced ? handleNavigateToCart : handlePlaceBid}
    />
  );
};
