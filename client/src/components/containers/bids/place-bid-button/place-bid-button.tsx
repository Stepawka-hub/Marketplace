import { FC } from "react";
import { useGetMeQuery } from "@/services";
import { usePlaceBidMutation } from "@/services/bid";
import { PlaceBidButtonUI } from "@/components/elements";
import { TPlaceBidButtonProps } from "./type";

export const PlaceBidButton: FC<TPlaceBidButtonProps> = ({
  lotId,
  sellerId,
}) => {
  const { data: userData } = useGetMeQuery();
  const [placeBid, { isLoading: isPlacing }] = usePlaceBidMutation();

  if (userData?.id === sellerId) {
    return null;
  }

  const handlePlaceBid = () => {
    placeBid({
      lotId: lotId || "",
      amount: 3500,
    });
  };

  return (
    <PlaceBidButtonUI isPlacing={isPlacing} handleAction={handlePlaceBid} />
  );
};
