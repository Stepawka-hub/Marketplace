import { ForgotPasswordForm } from '@modules/auth';
import { PageContainer } from '@ui/page-container';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const ForgotPasswordPage: FC = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <ForgotPasswordForm />
    </PageContainer>
  );
};