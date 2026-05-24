import { FC, useState } from "react";
import { useGetMeQuery, usePlaceBidMutation } from "@/services";
import { PlaceBidModal } from "@/components/containers";
import { PlaceBidButtonUI } from "@/components/elements";
import { TPlaceBidButtonProps } from "./type";

export const PlaceBidButton: FC<TPlaceBidButtonProps> = ({
  lotId,
  sellerId,
  currentWinnerId = "",
  currentPrice,
  minBidIncrement,
}) => {
  const { data: userData } = useGetMeQuery();
  const [placeBid, { isLoading: isPlacing }] = usePlaceBidMutation();

  const [isModalOpen, setIsOpenModal] = useState(false);

  const userId = userData?.id;

  if (userId === sellerId || userId === currentWinnerId) {
    return null;
  }

  const handlePlaceBid = (amount: number) => {
    placeBid({
      lotId: lotId,
      amount,
    });
  };

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <PlaceBidButtonUI isPlacing={isPlacing} handleAction={openModal} />
      <PlaceBidModal
        isOpen={isModalOpen}
        isLoading={isPlacing}
        currentPrice={currentPrice}
        minBidIncrement={minBidIncrement}
        onSubmit={handlePlaceBid}
        onClose={closeModal}
      />
    </>
  );
};
