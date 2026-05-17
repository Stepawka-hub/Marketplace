import { FC, useState } from "react";
import { useCreatePaymentMutation } from "@/services";
import { BalanceTopupUI } from "@/components/elements";
import { TBalanceTopupProps } from "./types";

const MIN_ALLOWED_PAYMENT = 100;

export const BalanceTopup: FC<TBalanceTopupProps> = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState("1000");
  const [createPayment, { isLoading }] = useCreatePaymentMutation();

  const handleSubmit = async () => {
    try {
      const amountNum = parseInt(amount, 10);

      if (isNaN(amountNum) || amountNum < MIN_ALLOWED_PAYMENT) {
        return;
      }

      const response = await createPayment({ amount: amountNum }).unwrap();

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
      minValue={MIN_ALLOWED_PAYMENT}
      setAmount={setAmount}
      onSubmit={handleSubmit}
      onClose={onClose}
    />
  );
};
