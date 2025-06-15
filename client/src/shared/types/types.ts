export type TProduct = {
  id: string;
  name: string;
  shortDescription?: string;
  category: string;
  image: string;
  price: number;
  seller: TProductSeller;
};

export type TCartProduct = Pick<TProduct, "id" | "name" | "image" | "price">;

export type TProductDetails = Omit<TProduct, 'image'> & {
  description: string;
  images: string[];
  attributes: TAttribute[];
  rating: number;
  numberReviews: number;
  createdAt: string;
  updatedAt?: string;
};

export type TProductSeller = {
  id: string;
  name: string;
};

export type TAttribute = {
  name: string;
  value: string;
};
