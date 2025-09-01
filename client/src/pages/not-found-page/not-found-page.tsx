import { FC } from "react";
import { NotFound } from "@/components/elements";
import { PageContainer } from "@/components/ui";

export const NotFoundPage: FC = () => (
  <PageContainer sx={{ mt: 10 }}>
    <NotFound />
  </PageContainer>
);
