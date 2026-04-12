import { TFilter, TRange, TUserRole } from "@/shared/types";

export type TLotState = {
  isCreationModalOpen: boolean;
  productData: TProductPreviewData;
};

export type TProductPreviewData = {
  productId: string | null;
  productName: string;
  productPreview: string | null;
};

export type TCatalogState = {
  categories: string[];
  priceRange: TRange;
  searchQuery: string;
  filters: TFilter;
};

export type TProfileState = {
  isAuthChecked: boolean;
  isAuth: boolean;
  userRole: TUserRole;
};
