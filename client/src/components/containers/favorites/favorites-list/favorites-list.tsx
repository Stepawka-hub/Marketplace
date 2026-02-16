import { FC, memo } from "react";
import { ProductListUI } from "@/components/elements";
import { useGetFavoritesProductsQuery } from "@/services/favorites";

export const FavoritesList: FC = memo(() => {
  const { data: products = [], isLoading } = useGetFavoritesProductsQuery(5);

  return <ProductListUI products={products} isLoading={isLoading} />;
});
