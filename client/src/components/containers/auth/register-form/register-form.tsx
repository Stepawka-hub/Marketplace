import { FC, useMemo } from "react";
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
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { TField, TRegisterForm } from "./types";

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
        translationPath: "register.form.fields",
        validation: {
          ...requiredValidation(t),
          ...minLengthValidation(2, t),
          ...maxLengthValidation(50, t),
        },
        icon: <PersonIcon />,
      },
      {
        name: "lastName",
        translationPath: "register.form.fields",
        validation: {
          ...requiredValidation(t),
          ...minLengthValidation(2, t),
          ...maxLengthValidation(50, t),
        },
        icon: <PersonIcon />,
      },
      {
        name: "email",
        translationPath: "form.fields",
        validation: {
          ...requiredValidation(t),
          ...emailValidation(t),
        },
        icon: <EmailIcon />,
      },
      {
        name: "phone",
        type: "phone",
        translationPath: "register.form.fields",
        prefix: "register.form",
        icon: <PhoneIcon />,
      },
      {
        name: "password",
        type: "password",
        translationPath: "form.fields",
        validation: {
          ...requiredValidation(t),
          ...minLengthValidation(8, t),
          ...maxLengthValidation(100, t),
        },
      },
      {
        name: "confirmPassword",
        type: "password",
        translationPath: "form.fields",
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
    <CenteredBox>
      <FormProvider {...methods}>
        <Form title={t("register.form.title")} onSubmit={onSubmit}>
          {fields.map(({ name, type, translationPath, validation, icon }) => {
            const label = t(`${translationPath}.${name}.label`);
            const placeholder = t(`${translationPath}.${name}.placeholder`);

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
                startIcon={icon}
                {...register(name, validation)}
              />
            );
          })}

          <SubmitButton>{t("register.form.submit-button")}</SubmitButton>
        </Form>
      </FormProvider>
    </CenteredBox>
  );
};
