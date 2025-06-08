import { TRange } from "@modules/catalog/services/types";
import { TSetState } from "@types";

export type PriceSliderProps = {
  priceRange: TRange;
  priceValue: number[];
  setPriceValue: TSetState<number[]>;
};
