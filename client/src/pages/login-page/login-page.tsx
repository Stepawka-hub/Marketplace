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
        text="Нет аккаунта?"
        linkText="Зарегистрироваться"
        sx={{ mt: 2 }}
      />
      <LinkedText
        to="/reset-password"
        text="Забыли пароль?"
        linkText="Восстановить"
        sx={{ mt: 1 }}
      />
    </PageContainer>
  );
};
