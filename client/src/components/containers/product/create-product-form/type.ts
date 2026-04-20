export type TCreateProductForm = {
  name: string;
  shortDescription: string;
  description?: string;
  category: string;
  media: File[];
  preview: File;
};
