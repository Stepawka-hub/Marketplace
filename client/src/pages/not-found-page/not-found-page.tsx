import { NotFound } from "@components/not-found";
import { PageContainer } from "@ui/page-container";
import { FC } from "react";

export const NotFoundPage: FC = () => (
  <PageContainer sx={{ mt: 10 }}>
    <NotFound />
  </PageContainer>
);
