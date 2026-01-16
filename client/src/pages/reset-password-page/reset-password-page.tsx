import { FC } from "react";
import { useTranslation } from "react-i18next";
import { ResetPasswordForm } from "@/components/containers";
import { LinkedText } from "@/components/elements";
import { PageContainer } from "@/components/ui";

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
