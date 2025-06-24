import { Button, Grid } from "@mui/material";
import { Form } from "@ui/form";
import { Input } from "@ui/form-elements";
import { FC, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { TField, TRegisterForm } from "./types";
import {
  EMAIL_REGEX,
  maxLengthValidation,
  minLengthValidation,
  requiredValidation,
} from "@shared/helpers/validate";
import { PasswordInput } from "@ui/form-elements";

export const RegisterForm: FC = () => {
  const { t } = useTranslation();
  const methods = useForm<TRegisterForm>({
    mode: "onChange",
  });
  const { register, handleSubmit, setError } = methods;

  const onSubmit = handleSubmit((formData) => {
    if (formData.password !== formData.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: t("form.validation.passwords-not-match"),
      });
      return;
    }
    console.log(formData);
  });

  const fields: TField[] = useMemo(
    () => [
      {
        name: "firstName",
        validation: {
          ...requiredValidation(t),
          ...minLengthValidation(2, t),
          ...maxLengthValidation(50, t),
        },
      },
      {
        name: "lastName",
        validation: {
          ...requiredValidation(t),
          ...minLengthValidation(2, t),
          ...maxLengthValidation(50, t),
        },
      },
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
        name: "phone",
        type: "phone",
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
      {
        name: "confirmPassword",
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
          <Form title={t("register-form.title")} onSubmit={onSubmit}>
            {fields.map(({ name, type, validation }) => {
              const label = t(`register-form.fields.${name}.label`);
              const placeholder = t(`register-form.fields.${name}.placeholder`);

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
              Зарегистрироваться
            </Button>
          </Form>
        </FormProvider>
      </Grid>
    </Grid>
  );
};
