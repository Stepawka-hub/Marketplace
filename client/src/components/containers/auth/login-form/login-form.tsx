import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  emailValidation,
  maxLengthValidation,
  minLengthValidation,
  requiredValidation,
} from "@/shared/helpers";

import { Input, PasswordInput } from "@/components/containers";
import { Form } from "@/components/elements";
import { CenteredBox, SubmitButton } from "@/components/ui";
import EmailIcon from "@mui/icons-material/Email";
import { TLoginForm } from "./types";

export const LoginForm: FC = () => {
  const { t } = useTranslation();
  const methods = useForm<TLoginForm>({ mode: "onChange" });
  const { register, handleSubmit } = methods;

  const onSubmit = handleSubmit((formData) => {
    console.log(formData);
  });

  return (
    <CenteredBox>
      <FormProvider {...methods}>
        <Form title={t("login.form.title")} onSubmit={onSubmit}>
          <Input
            label={t("form.fields.email.label")}
            placeholder={t("form.fields.email.placeholder")}
            {...register("email", {
              ...requiredValidation(t),
              ...emailValidation(t),
            })}
            startIcon={<EmailIcon />}
          />
          <PasswordInput
            {...register("password", {
              ...requiredValidation(t),
              ...minLengthValidation(8, t),
              ...maxLengthValidation(100, t),
            })}
          />
          <SubmitButton>{t("login.form.submit-button")}</SubmitButton>
        </Form>
      </FormProvider>
    </CenteredBox>
  );
};
