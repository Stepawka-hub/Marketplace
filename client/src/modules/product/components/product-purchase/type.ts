export type ProductPurchaseProps = {
  isInCart: boolean;
  isInFavorites: boolean;
  price: number;
  addToFavorites: () => void;
  addToCart: () => void;
}