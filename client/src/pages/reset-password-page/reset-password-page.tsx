import { ResetPasswordForm } from "@modules/auth";
import { LinkedText } from "@ui/linked-text";
import { PageContainer } from "@ui/page-container";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export const ResetPasswordPage: FC = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <ResetPasswordForm />
      <LinkedText
        to="/login"
        text={t("auth.linked-text.remembered-password")}
        linkText={t("auth.links.login")}
        sx={{ mt: 2 }}
      />
    </PageContainer>
  );
};
