import { FC, useMemo } from "react";
import { isInArray } from "@/shared/helpers";
import { PlaceBidButtonUI } from "@/components/elements";
import { TPlaceBidButtonProps } from "./type";
import { useGetMeQuery } from "@/services";

export const PlaceBidButton: FC<TPlaceBidButtonProps> = ({
  productId,
  sellerId,
}) => {
  const { data: userData } = useGetMeQuery();
  const bidIds: string[] = [];
  const disabled = false;

  const isPlaced = useMemo(
    () => isInArray(bidIds, productId),
    [bidIds, productId],
  );

  if (userData?.id === sellerId) {
    return null;
  }

  const handlePlaceBid = () => {};

  const handleNavigateToMyBids = () => {};

  return (
    <PlaceBidButtonUI
      isPlaced={isPlaced}
      disabled={disabled}
      handleAction={isPlaced ? handleNavigateToMyBids : handlePlaceBid}
    />
  );
};
