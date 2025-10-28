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
  media: TProductMedia[];
  seller: TProductSeller;
  createdAt: string;
  updatedAt: string;
};

export type TProductMedia = {
  url: string;
  isPreview: boolean;
};

export type TProductDetails = {
  description?: string;
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

export type TCartProduct = Pick<TProduct, "id" | "name" | "media" | "price">;
