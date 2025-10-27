export type TProductSeller = {
  id: string;
  firstName: string;
  lastName: string;
};

export type TProduct = {
  id: string;
  name: string;
  shortDescription: string;
  description?: string;
  category: string;
  price: number;
  rating: number;
  preview: string;
  media: string[];
  seller: TProductSeller;
};

export type TProductOld = {
  id: string;
  name: string;
  shortDescription: string;
  category: string;
  preview: string;
  images: string[];
  price: number;
  seller: TProductSeller;
};

export type TProductDetails = Omit<TProductOld, "image"> & {
  description?: string;
  images: string[];
  attributes: TProductAttribute[];
  rating: number;
  numberReviews: number;
  createdAt: string;
  updatedAt?: string;
};

export type TProductData = TProductOld | TProductDetails;

export type TProductAttribute = {
  name: string;
  value: string;
};

export type TCartProduct = Pick<
  TProductOld,
  "id" | "name" | "preview" | "price"
>;

export type TProductActions = {
  isInCart: (pId: string) => boolean;
  isInFavorites: (pId: string) => boolean;
  addToCart: (p: TProductData) => void;
  toggleFavorite: (p: TProductData) => void;
};
