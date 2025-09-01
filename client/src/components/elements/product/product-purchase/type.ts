export type TProductPurchaseProps = {
  isInCart: boolean;
  isInFavorites: boolean;
  price: number;
  addToCart: () => void;
  toggleFavorite: () => void;
};
