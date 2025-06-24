import { RegisterForm } from "@modules/auth";
import { LinkedText } from "@ui/linked-text";
import { PageContainer } from "@ui/page-container";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export const RegisterPage: FC = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <RegisterForm />
      <LinkedText
        to="/login"
        text={t("register.already-have-account")}
        linkText={t("register.login-link")}
        sx={{ mt: 2 }}
      />
    </PageContainer>
  );
};
