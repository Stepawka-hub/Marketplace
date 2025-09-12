import { TRange, TSetState } from "@/shared/types";

export type TPriceSliderProps = {
  priceRange: TRange;
  priceValue: number[];
  setPriceValue: TSetState<number[]>;
};
