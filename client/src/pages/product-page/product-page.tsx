import { FC } from "react";
import { BackButton, ProductDetails } from "@/components/containers";
import { PageContainer } from "@/components/ui";

export const ProductPage: FC = () => {
  return (
    <PageContainer>
      <BackButton />
      <ProductDetails />
    </PageContainer>
  );
};
