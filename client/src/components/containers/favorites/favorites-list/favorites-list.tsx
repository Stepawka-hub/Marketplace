import { FC, memo } from "react";
import { useGetAllProductsQuery } from "@/services";
import { ProductListUI } from "@/components/elements";

export const FavoritesList: FC = memo(() => {
  const { data: products = [], isLoading } = useGetAllProductsQuery(5);

  return <ProductListUI products={products} isLoading={isLoading} />;
});
