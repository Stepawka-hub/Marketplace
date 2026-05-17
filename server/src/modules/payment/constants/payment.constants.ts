export const PAYMENT_STATUSES = {
  PENDING: 'pending',
  WAITING_FOR_CAPTURE: 'waiting_for_capture',
  SUCCEEDED: 'succeeded',
  CANCELED: 'canceled',
};

export const PAYMENT_EVENTS = {
  WAITING_FOR_CAPTURE: 'payment.waiting_for_capture',
  SUCCEEDED: 'payment.succeeded',
  CANCELED: 'payment.canceled',
};
