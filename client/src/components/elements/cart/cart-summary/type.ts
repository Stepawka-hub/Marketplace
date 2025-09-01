export type TCartSummaryProps = {
  totalPrice: string;
  labels: {
    information: string;
    products: string;
    checkout: string;
  };
  onCheckout: () => void;
};
