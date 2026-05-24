export type TPlaceBidModalProps = {
  isOpen: boolean;
  currentPrice: number;
  minBidIncrement: number;
  isLoading?: boolean;
  onSubmit: (amount: number) => void;
  onClose: () => void;
};