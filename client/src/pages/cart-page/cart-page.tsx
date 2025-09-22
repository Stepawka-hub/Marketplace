import { FC } from "react";
import { Cart, BackButton } from "@/components/containers";
import { PageContainer } from "@/components/ui";

export const CartPage: FC = () => (
  <PageContainer>
    <BackButton />
    <Cart />
  </PageContainer>
);
