import { FC } from "react";
import { BackButton, LotDetails } from "@/components/containers";
import { PageContainer } from "@/components/ui";

export const LotPage: FC = () => {
  return (
    <PageContainer>
      <BackButton />
      <LotDetails />
    </PageContainer>
  );
};
