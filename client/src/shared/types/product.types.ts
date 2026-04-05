export type TBaseProduct = {
  id: string;
  name: string;
  shortDescription: string;
  category: string;
  price: number;
  createdAt: string;
  updatedAt: string;
};

export type TProductListItem = TBaseProduct & {
  preview: string;
  seller: TProductSeller;
};

export type TProductDetails = TBaseProduct & {
  description?: string;
  rating: number;
  media: TProductMedia[];
  seller: TProductSeller;
};

export type TProductSeller = {
  id: string;
  firstName: string;
  lastName: string;
};

export type TProductMedia = {
  url: string;
  isPreview: boolean;
};

export type TProductAttribute = {
  name: string;
  value: string;
};