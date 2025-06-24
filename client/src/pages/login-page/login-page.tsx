import { LoginForm } from "@modules/auth";
import { LinkedText } from "@ui/linked-text";
import { PageContainer } from "@ui/page-container";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export const LoginPage: FC = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <LoginForm />
      <LinkedText
        to="/register"
        text={t("login.no-account")}
        linkText={t("login.register-link")}
        sx={{ mt: 2 }}
      />
      <LinkedText
        to="/forgot-password"
        text={t("login.forgot-password")}
        linkText={t("login.reset-password-link")}
        sx={{ mt: 1 }}
      />
    </PageContainer>
  );
};
