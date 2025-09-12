export type TProductSeller = {
  id: string;
  name: string;
};

export type TProduct = {
  id: string;
  name: string;
  shortDescription?: string;
  category: string;
  image: string;
  price: number;
  seller: TProductSeller;
};

export type TProductDetails = Omit<TProduct, "image"> & {
  description: string;
  images: string[];
  attributes: TProductAttribute[];
  rating: number;
  numberReviews: number;
  createdAt: string;
  updatedAt?: string;
};

export type TProductData = TProduct | TProductDetails;

export type TProductAttribute = {
  name: string;
  value: string;
};

export type TCartProduct = Pick<TProduct, "id" | "name" | "image" | "price">;

export type TProductActions = {
  isInCart: (pId: string) => boolean;
  isInFavorites: (pId: string) => boolean;
  addToCart: (p: TProductData) => void;
  toggleFavorite: (p: TProductData) => void;
};
