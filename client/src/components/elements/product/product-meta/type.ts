import { TProductSeller } from '@/shared/types';

export type TAttribute = {
  name: string;
  value: string;
};

export type TProductMetaProps = {
  seller: TProductSeller;
  attributes: TAttribute[];
  description?: string;
};
