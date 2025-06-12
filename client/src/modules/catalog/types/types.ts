export type TFilter = {
  price: TPrice;
  category: string;
};

export type TPrice = {
  min: number;
  max: number;
};

export type TRange = {
  min: number,
  max: number;
};
