import { Button, Grid } from "@mui/material";
import {
  EMAIL_REGEX,
  maxLengthValidation,
  minLengthValidation,
  requiredValidation,
} from "@shared/helpers/validate";
import { Form } from "@ui/form";
import { Input, PasswordInput } from "@ui/form-elements";
import { FC, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { TField, TLoginForm } from "./types";

export const LoginForm: FC = () => {
  const { t } = useTranslation();
  const methods = useForm<TLoginForm>({ mode: "onChange" });
  const { register, handleSubmit } = methods;

  const onSubmit = handleSubmit((formData) => {
    console.log(formData);
  });

  const fields: TField[] = useMemo(
    () => [
      {
        name: "email",
        validation: {
          ...requiredValidation(t),
          pattern: {
            value: EMAIL_REGEX,
            message: t("form.validation.email-invalid"),
          },
        },
      },
      {
        name: "password",
        type: "password",
        validation: {
          ...requiredValidation(t),
          ...minLengthValidation(8, t),
          ...maxLengthValidation(100, t),
        },
      },
    ],
    [t]
  );

  return (
    <Grid container sx={{ justifyContent: "center", mt: 10 }}>
      <Grid size={{ xs: 12, md: 8, lg: 6 }}>
        <FormProvider {...methods}>
          <Form title={t("login.form.title")} onSubmit={onSubmit}>
            {fields.map(({ name, type, validation }) => {
              const label = t(`login.form.fields.${name}.label`);
              const placeholder = t(`login.form.fields.${name}.placeholder`);

              if (type === "password") {
                return (
                  <PasswordInput
                    key={name}
                    label={label}
                    placeholder={placeholder}
                    {...register(name, validation)}
                  />
                );
              }

              return (
                <Input
                  key={name}
                  label={label}
                  placeholder={placeholder}
                  {...register(name, validation)}
                />
              );
            })}

            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              {t('login.form.submit-button')}
            </Button>
          </Form>
        </FormProvider>
      </Grid>
    </Grid>
  );
};
