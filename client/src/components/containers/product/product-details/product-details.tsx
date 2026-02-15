import { FC } from "react";
import { useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query";
import { useGetProductByIdQuery } from "@/services";
import { NotFound, ProductDetailsUI } from "@/components/elements";
import { Loader } from "@/components/ui";

export const ProductDetails: FC = () => {
  const { productId } = useParams<"productId">();
  const { data: product, isLoading } = useGetProductByIdQuery(
    productId ?? skipToken,
  );

  if (isLoading) return <Loader />;

  if (!product || !productId) return <NotFound />;

  return <ProductDetailsUI product={product} />;
};
