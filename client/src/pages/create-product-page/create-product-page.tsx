import { FC } from "react";
import { useTranslation } from "react-i18next";
import { ROUTES } from "@/config/routes";
import { BackButton, CreateProductForm } from "@/components/containers";
import { PageContainer } from "@/components/ui";

export const CreateProductPage: FC = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <BackButton
        title={t("create-product.actions.back-to-profile")}
        path={ROUTES.PROFILE_SELLER_PANEL}
      />
      <CreateProductForm />
    </PageContainer>
  );
};
