export type TCreatePaymentRequest = {
  amount: number;
};

export type TCreatePaymentResponse = {
  data: {
    paymentId: string;
    confirmationUrl: string;
  };
  message: string;
};
