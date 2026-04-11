import { FC, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import { useAddToCartMutation, useGetCartItemsIdsQuery } from "@/services/cart";
import { isInArray } from "@/shared/helpers";
import { PlaceBidButtonUI } from "@/components/elements";
import { TPlaceBidButtonProps } from "./type";
import { useGetMeQuery } from "@/services";

export const PlaceBidButton: FC<TPlaceBidButtonProps> = ({
  productId,
  sellerId,
}) => {
  const navigate = useNavigate();

  const { data: userData } = useGetMeQuery();
  const { data: bidIds = [] } = useGetCartItemsIdsQuery();

  const [addToCart, { isLoading: isAdding }] = useAddToCartMutation();

  const isPlaced = useMemo(
    () => isInArray(bidIds, productId),
    [bidIds, productId],
  );

  if (userData?.id === sellerId) {
    return null;
  }

  const handlePlaceBid = () => {
    addToCart({ productId });
  };

  const handleNavigateToMyBids = () => {
    navigate(ROUTES.MY_BIDS);
  };

  return (
    <PlaceBidButtonUI
      isPlaced={isPlaced}
      disabled={isAdding}
      handleAction={isPlaced ? handleNavigateToMyBids : handlePlaceBid}
    />
  );
};
