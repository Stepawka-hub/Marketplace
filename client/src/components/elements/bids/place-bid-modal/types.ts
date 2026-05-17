export type TPlaceBidModalUIProps = {
  isOpen: boolean;
  isLoading: boolean;
  amount: string;
  minAllowedBid: number;
  setAmount: (amount: string) => void;
  onSubmit: () => void;
  onClose: () => void;
};
