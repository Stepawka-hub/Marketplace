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
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { TRegisterForm } from "./types";
import { useRegisterMutation } from "@/services";

import { REGISTER_FIELDS } from "./constants";

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

  const getRegisterField = (field: string, type: "label" | "placeholder") =>
    t(`register.form.fields.${field}.${type}`);

  const getCommonField = (field: string, type: "label" | "placeholder") =>
    t(`form.fields.${field}.${type}`);

  return (
    <CenteredBox>
      <FormProvider {...methods}>
        <Form title={t("register.form.title")} onSubmit={onSubmit}>
          <Input
            id={getFieldId(FIRST_NAME)}
            label={getRegisterField(FIRST_NAME, "label")}
            placeholder={getRegisterField(FIRST_NAME, "placeholder")}
            startIcon={<PersonIcon />}
            {...register(FIRST_NAME, {
              ...requiredValidation(t),
              ...minLengthValidation(2, t),
              ...maxLengthValidation(50, t),
            })}
          />

          <Input
            id={getFieldId(LAST_NAME)}
            label={getRegisterField(LAST_NAME, "label")}
            placeholder={getRegisterField(LAST_NAME, "placeholder")}
            startIcon={<PersonIcon />}
            {...register(LAST_NAME, {
              ...requiredValidation(t),
              ...minLengthValidation(2, t),
              ...maxLengthValidation(50, t),
            })}
          />

          <Input
            id={getFieldId(EMAIL)}
            label={getCommonField(EMAIL, "label")}
            placeholder={getCommonField(EMAIL, "placeholder")}
            startIcon={<EmailIcon />}
            autoComplete="email"
            {...register(EMAIL, {
              ...requiredValidation(t),
              ...emailValidation(t),
            })}
          />

          <Input
            id={getFieldId(PHONE)}
            label={getRegisterField(PHONE, "label")}
            placeholder={getRegisterField(PHONE, "placeholder")}
            startIcon={<PhoneIcon />}
            {...register(PHONE)}
          />

          <PasswordInput
            id={getFieldId(PASSWORD)}
            label={getCommonField(PASSWORD, "label")}
            placeholder={getCommonField(PASSWORD, "placeholder")}
            {...register(PASSWORD, {
              ...requiredValidation(t),
              ...minLengthValidation(8, t),
              ...maxLengthValidation(100, t),
            })}
          />

          <PasswordInput
            id={getFieldId(CONFIRM_PASSWORD)}
            label={getCommonField(CONFIRM_PASSWORD, "label")}
            placeholder={getCommonField(CONFIRM_PASSWORD, "placeholder")}
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
