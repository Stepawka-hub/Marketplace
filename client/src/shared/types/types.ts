export type TProductOwner = {
  id: string;
  name: string;
};

export type TProduct = {
  id: string;
  name: string;
  description: string;
  shortDescription?: string;
  category: string;
  image: string;
  price: number;
  owner: TProductOwner;
  createdAt: string;
  updatedAt?: string;
};

export type TAttribute = {
  name: string;
  value: string;
};
