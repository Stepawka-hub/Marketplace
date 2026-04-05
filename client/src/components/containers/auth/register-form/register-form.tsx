import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useRegisterMutation } from "@/services";
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
import { REGISTER_FIELDS } from "./constants";
import { TRegisterForm } from "./types";

export const RegisterForm: FC = () => {
  const { t } = useTranslation();
  const methods = useForm<TRegisterForm>({
    mode: "onChange",
  });
  const { register, handleSubmit, setError } = methods;
  const { FIRST_NAME, LAST_NAME, EMAIL, PHONE, PASSWORD, CONFIRM_PASSWORD } =
    REGISTER_FIELDS;

  const [registerAsync, { error, isLoading }] = useRegisterMutation();

  const onSubmit = handleSubmit((formData) => {
    if (formData.password !== formData.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: t("form.validation.passwords-not-match"),
      });

      return;
    }

    registerAsync(formData);
  });

  const getFieldId = (field: string) => `register_${field}`;

  const getFieldTranslation = (field: string, type: "label" | "placeholder") =>
    t(`form.fields.${field}.${type}`);

  return (
    <CenteredBox>
      <FormProvider {...methods}>
        <Form title={t("register.form.title")} onSubmit={onSubmit}>
          <Input
            id={getFieldId(FIRST_NAME)}
            label={getFieldTranslation(FIRST_NAME, "label")}
            placeholder={getFieldTranslation(FIRST_NAME, "placeholder")}
            startIcon={<PersonIcon />}
            {...register(FIRST_NAME, {
              ...requiredValidation(t),
              ...minLengthValidation(2, t),
              ...maxLengthValidation(50, t),
            })}
          />

          <Input
            id={getFieldId(LAST_NAME)}
            label={getFieldTranslation(LAST_NAME, "label")}
            placeholder={getFieldTranslation(LAST_NAME, "placeholder")}
            startIcon={<PersonIcon />}
            {...register(LAST_NAME, {
              ...requiredValidation(t),
              ...minLengthValidation(2, t),
              ...maxLengthValidation(50, t),
            })}
          />

          <Input
            id={getFieldId(EMAIL)}
            label={getFieldTranslation(EMAIL, "label")}
            placeholder={getFieldTranslation(EMAIL, "placeholder")}
            startIcon={<EmailIcon />}
            autoComplete="email"
            {...register(EMAIL, {
              ...requiredValidation(t),
              ...emailValidation(t),
            })}
          />

          <Input
            id={getFieldId(PHONE)}
            label={getFieldTranslation(PHONE, "label")}
            placeholder={getFieldTranslation(PHONE, "placeholder")}
            startIcon={<PhoneIcon />}
            {...register(PHONE)}
          />

          <PasswordInput
            id={getFieldId(PASSWORD)}
            label={getFieldTranslation(PASSWORD, "label")}
            placeholder={getFieldTranslation(PASSWORD, "placeholder")}
            {...register(PASSWORD, {
              ...requiredValidation(t),
              ...minLengthValidation(8, t),
              ...maxLengthValidation(100, t),
            })}
          />

          <PasswordInput
            id={getFieldId(CONFIRM_PASSWORD)}
            label={getFieldTranslation(CONFIRM_PASSWORD, "label")}
            placeholder={getFieldTranslation(CONFIRM_PASSWORD, "placeholder")}
            {...register(CONFIRM_PASSWORD, {
              ...requiredValidation(t),
              ...minLengthValidation(8, t),
              ...maxLengthValidation(100, t),
            })}
          />

          <SubmitButton disabled={isLoading}>
            {t("register.form.submit-button")}
          </SubmitButton>
        </Form>
      </FormProvider>
    </CenteredBox>
  );
};
