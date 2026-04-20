import { TLotStatus } from "./lot.types";

export type TFilter = {
  price: TPrice;
  status?: TLotStatus[];
};

export type TPrice = {
  min: number;
  max: number;
};
