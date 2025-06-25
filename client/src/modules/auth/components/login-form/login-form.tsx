import { Button } from "@mui/material";
import {
  emailValidation,
  maxLengthValidation,
  minLengthValidation,
  requiredValidation
} from "@shared/helpers/validate";
import { CenteredGrid } from "@ui/centered-grid";
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
          ...emailValidation(t),
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
    <CenteredGrid>
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
            {t("login.form.submit-button")}
          </Button>
        </Form>
      </FormProvider>
    </CenteredGrid>
  );
};
