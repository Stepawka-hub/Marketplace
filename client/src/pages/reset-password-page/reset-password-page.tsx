import { ResetPasswordForm } from "@modules/auth";
import { PageContainer } from "@ui/page-container";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export const ResetPasswordPage: FC = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <ResetPasswordForm />
    </PageContainer>
  );
};
