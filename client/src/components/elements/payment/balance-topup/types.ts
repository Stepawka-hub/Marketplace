export type TBalanceTopupUIProps = {
  isOpen: boolean;
  isLoading: boolean;
  amount: number;
  setAmount: (v: number) => void;
  onSubmit: () => void;
  onClose: () => void;
};
