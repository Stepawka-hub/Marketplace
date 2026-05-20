export type TEnableAutoBidModalProps = {
  isOpen: boolean;
  currentPrice: number;
  minBidIncrement: number;
  isLoading?: boolean;
  onSubmit: (amount: number) => void;
  onClose: () => void;
};