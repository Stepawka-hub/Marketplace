import { PAYMENT_STATUSES } from '../constants';
import { PAYMENT_EVENTS } from '../constants/payment.constants';

export type TPaymentStatus =
  (typeof PAYMENT_STATUSES)[keyof typeof PAYMENT_STATUSES];

export type TPaymentEvent =
  (typeof PAYMENT_EVENTS)[keyof typeof PAYMENT_EVENTS];

export type TYookassaWebhook = {
  type: 'notification';
  event: TPaymentEvent;
  object: {
    id: string;
    status: TPaymentStatus;
    amount: {
      value: string;
      currency: string;
    };
    income_amount?: {
      value: string;
      currency: string;
    };
    description?: string;
    recipient: {
      account_id: string;
      gateway_id: string;
    };
    payment_method: {
      type: string;
      id: string;
      saved: boolean;
      status: string;
      title?: string;
      account_number?: string;
    };
    captured_at?: string;
    created_at: string;
    test: boolean;
    refunded_amount: {
      value: string;
      currency: string;
    };
    paid: boolean;
    refundable: boolean;
    metadata: {
      userId: string;
      paymentType?: string;
    };
  };
};
