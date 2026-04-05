import { FC } from "react";
import { useTranslation } from "react-i18next";

import { ForgotPasswordForm } from '@/components/containers';
import { LinkedText } from '@/components/elements';
import { PageContainer } from '@/components/ui';

export const ForgotPasswordPage: FC = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <ForgotPasswordForm />
      <LinkedText
        to="/login"
        text={t("auth.linked-text.remembered-password")}
        linkText={t("auth.links.login")}
        sx={{ mt: 2 }}
      />
    </PageContainer>
  );
};
