import { MouseEvent } from "react";

export type TAddToCartButtonUIProps = {
  isInCart: boolean;
  onAddToCart: (e: MouseEvent) => void;
  onNavigateToCart: (e: MouseEvent) => void;
};
