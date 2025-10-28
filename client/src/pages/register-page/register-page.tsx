import { FC } from "react";
import { useTranslation } from "react-i18next";
import { PageContainer } from "@/components/ui";
import { RegisterForm } from "@/components/containers";
import { LinkedText } from "@/components/elements";

export const RegisterPage: FC = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <RegisterForm />
      <LinkedText
        to="/login"
        text={t("auth.linked-text.already-have-account")}
        linkText={t("auth.links.login")}
        sx={{ mt: 2 }}
      />
    </PageContainer>
  );
};
