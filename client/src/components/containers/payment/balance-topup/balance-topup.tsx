import { FC, useState } from "react";
import { useCreatePaymentMutation } from "@/services";
import { BalanceTopupUI } from "@/components/elements";
import { TBalanceTopupProps } from "./types";

export const BalanceTopup: FC<TBalanceTopupProps> = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState(1000);
  const [createPayment, { isLoading }] = useCreatePaymentMutation();

  const handleSubmit = async () => {
    try {
      const response = await createPayment({ amount }).unwrap();

      window.location.href = response.data.confirmationUrl;
    } catch (err) {
      console.error("Payment creation failed:", err);
    }
  };

  return (
    <BalanceTopupUI
      isOpen={isOpen}
      isLoading={isLoading}
      amount={amount}
      setAmount={setAmount}
      onSubmit={handleSubmit}
      onClose={onClose}
    />
  );
};
