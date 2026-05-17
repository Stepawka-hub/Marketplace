import { FC, useState, useEffect } from "react";
import { PlaceBidModalUI } from "@/components/elements";
import { TPlaceBidModalProps } from "./types";

export const PlaceBidModal: FC<TPlaceBidModalProps> = ({
  isOpen,
  currentPrice,
  minBidIncrement,
  isLoading = false,
  onSubmit,
  onClose,
}) => {
  const [amount, setAmount] = useState<string>("");
  const minAllowedBid = currentPrice + minBidIncrement;

  useEffect(() => {
    if (isOpen) {
      setAmount(String(minAllowedBid));
    }
  }, [isOpen, minAllowedBid]);

  const handleSubmit = () => {
    const amountNum = parseInt(amount, 10);
    if (isNaN(amountNum) || amountNum < minAllowedBid) {
      return;
    }

    onSubmit(amountNum);
    onClose();
  };

  return (
    <PlaceBidModalUI
      isOpen={isOpen}
      isLoading={isLoading}
      amount={amount}
      minAllowedBid={minAllowedBid}
      setAmount={setAmount}
      onSubmit={handleSubmit}
      onClose={onClose}
    />
  );
};
