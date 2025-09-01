import { useSelector } from "react-redux";
import {
  getFilters,
  getIsLoadingProducts,
  getProducts,
  getSearchQuery,
} from "../services/slices/catalog";
import { checkInRange, includesRow } from "@shared/helpers/filter";

export const useProductList = () => {
  const products = useSelector(getProducts);
  const isLoading = useSelector(getIsLoadingProducts);
  const searchQuery = useSelector(getSearchQuery);
  const { category, price } = useSelector(getFilters);

  const filteredProducts = products.filter(
    (p) =>
      (category === "all" || p.category === category) &&
      checkInRange(p.price, price.max, price.min) &&
      includesRow(searchQuery, [p.name])
  );

  return {
    products: filteredProducts,
    isLoading,
  };
};
