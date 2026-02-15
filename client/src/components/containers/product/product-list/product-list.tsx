import { FC } from "react";
import { checkInRange, includesRow } from "@/shared/helpers";
import { useSelector } from "@/store";
import { getFilters, getSearchQuery } from "@/store/slices/catalog";
import { ProductListUI } from "@/components/elements";
import { useGetAllProductsQuery } from "@/services";

export const ProductList: FC = () => {
  const { data: products = [], isLoading } = useGetAllProductsQuery(5);

  const searchQuery = useSelector(getSearchQuery);
  const { category, price } = useSelector(getFilters);

  const filteredProducts = products.filter(
    (p) =>
      (category === "all" || p.category === category) &&
      checkInRange(p.price, price.max, price.min) &&
      includesRow(searchQuery, [p.name])
  );

  return (
    <ProductListUI
      products={filteredProducts}
      isLoading={isLoading}
    />
  );
};
