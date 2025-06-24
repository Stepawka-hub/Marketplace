import { BackButton } from "@components/back-button";
import { Cart } from "@modules/cart";
import { PageContainer } from "@ui/page-container";
import { FC } from "react";

export const CartPage: FC = () => (
  <PageContainer>
    <BackButton />
    <Cart />
  </PageContainer>
);
