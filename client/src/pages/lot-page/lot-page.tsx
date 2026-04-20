import { FC } from "react";
import { useParams } from "react-router-dom";
import { BackButton, BidsList, LotDetails } from "@/components/containers";
import { NotFound } from "@/components/elements";
import { PageContainer } from "@/components/ui";

export const LotPage: FC = () => {
  const { lotId } = useParams<"lotId">();

  if (!lotId) {
    return <NotFound />;
  }

  return (
    <PageContainer>
      <BackButton />
      <LotDetails lotId={lotId} />
      <BidsList lotId={lotId} />
    </PageContainer>
  );
};
