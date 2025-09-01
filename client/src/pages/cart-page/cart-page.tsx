import { CartContainer } from "@/components/containers";
import { BackButton } from "@/components/elements";
import { PageContainer } from "@/components/ui";
import { FC } from "react";

export const CartPage: FC = () => (
  <PageContainer>
    <BackButton />
    <CartContainer />
  </PageContainer>
);
