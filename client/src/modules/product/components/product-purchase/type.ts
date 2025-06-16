export type ProductPurchaseProps = {
  isInCart: boolean;
  isInFavorites: boolean;
  price: number;
  addToCart: () => void;
  toggleFavorite: () => void;
};
