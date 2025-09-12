import { FC } from "react";
import { CartContainer, BackButton } from "@/components/containers";
import { PageContainer } from "@/components/ui";

export const CartPage: FC = () => (
  <PageContainer>
    <BackButton />
    <CartContainer />
  </PageContainer>
);
