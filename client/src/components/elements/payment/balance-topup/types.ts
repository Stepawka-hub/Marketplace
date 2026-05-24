export type TBalanceTopupUIProps = {
  isOpen: boolean;
  isLoading: boolean;
  amount: string;
  minValue: number;
  setAmount: (amount: string) => void;
  onSubmit: () => void;
  onClose: () => void;
};
