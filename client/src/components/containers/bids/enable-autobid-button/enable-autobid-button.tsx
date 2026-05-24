import { FC, useState } from "react";
import { useEnableAutoBidMutation, useGetMeQuery } from "@/services";
import { EnableAutoBidModal } from "@/components/containers";
import { EnableAutoBidButtonUI } from "@/components/elements";
import { TEnableAutobidButtonProps } from "./types";

export const EnableAutoBidButton: FC<TEnableAutobidButtonProps> = ({
  lotId,
  sellerId,
  currentWinnerId = "",
  currentPrice,
  minBidIncrement,
}) => {
  const { data: userData } = useGetMeQuery();
  const [enableAutoBid, { isLoading: isEnabling }] = useEnableAutoBidMutation();

  const [isModalOpen, setIsOpenModal] = useState(false);

  const userId = userData?.id;

  if (userId === sellerId || userId !== currentWinnerId) {
    return null;
  }

  const handleEnableAutoBid = (maxAmount: number) => {
    enableAutoBid({
      lotId,
      maxAmount,
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
      <EnableAutoBidButtonUI isEnabling={isEnabling} handleAction={openModal} />
      <EnableAutoBidModal
        isOpen={isModalOpen}
        isLoading={isEnabling}
        currentPrice={currentPrice}
        minBidIncrement={minBidIncrement}
        onSubmit={handleEnableAutoBid}
        onClose={closeModal}
      />
    </>
  );
};
