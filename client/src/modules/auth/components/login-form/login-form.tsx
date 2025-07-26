import { Button } from "@mui/material";
import {
  emailValidation,
  maxLengthValidation,
  minLengthValidation,
  requiredValidation,
} from "@shared/helpers/validate";
import { CenteredGrid } from "@ui/centered-grid";
import { Form } from "@ui/form";
import { Input, PasswordInput } from "@ui/form-elements";
import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { TLoginForm } from "./types";

export const LoginForm: FC = () => {
  const { t } = useTranslation();
  const methods = useForm<TLoginForm>({ mode: "onChange" });
  const { register, handleSubmit } = methods;

  const onSubmit = handleSubmit((formData) => {
    console.log(formData);
  });

  return (
    <CenteredGrid>
      <FormProvider {...methods}>
        <Form title={t("login.form.title")} onSubmit={onSubmit}>
          <Input
            label={t("form.fields.email.label")}
            placeholder={t("form.fields.email.placeholder")}
            {...register("email", {
              ...requiredValidation(t),
              ...emailValidation(t),
            })}
          />
          <PasswordInput
            {...register("password", {
              ...requiredValidation(t),
              ...minLengthValidation(8, t),
              ...maxLengthValidation(100, t),
            })}
          />
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            {t("login.form.submit-button")}
          </Button>
        </Form>
      </FormProvider>
    </CenteredGrid>
  );
};
