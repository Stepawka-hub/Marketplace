import { FC } from "react";
import { MyBids, BackButton } from "@/components/containers";
import { PageContainer } from "@/components/ui";

export const BidsPage: FC = () => (
  <PageContainer>
    <BackButton />
    <MyBids />
  </PageContainer>
);
