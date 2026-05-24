export type TLotPurchaseProps = {
  lotId: string;
  sellerId: string;
  currentWinnerId?: string;
  price: number;
  minBidIncrement: number;
  hasAutoBid?: boolean;
};
