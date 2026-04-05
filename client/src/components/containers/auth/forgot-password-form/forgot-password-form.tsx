import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { emailValidation, requiredValidation } from "@/shared/helpers/validate";

import { Input } from "@/components/containers";
import { Form } from "@/components/elements";
import { CenteredBox, SubmitButton } from "@/components/ui";
import EmailIcon from "@mui/icons-material/Email";
import { TForgotPasswordForm } from "./type";

export const ForgotPasswordForm: FC = () => {
  const { t } = useTranslation();
  const methods = useForm<TForgotPasswordForm>({ mode: "onChange" });
  const { register, handleSubmit } = methods;
  // const navigate = useNavigate();

  const onSubmit = handleSubmit((formData) => {
    console.log(formData);

    // forgotPasswordApi({ email })
    //   .then(() => {
    //     localStorage.setItem("resetPassword", "true");
    //     navigate("/reset-password", { replace: true });
    //   })
    //   .catch((err) => setError(err))
    //   .finally(() => setIsFetching(false));
  });

  return (
    <CenteredBox>
      <FormProvider {...methods}>
        <Form title={t("forgot-password.form.title")} onSubmit={onSubmit}>
          <Input
            label={t("form.fields.email.label")}
            placeholder={t("form.fields.email.placeholder")}
            {...register("email", {
              ...requiredValidation(t),
              ...emailValidation(t),
            })}
            startIcon={<EmailIcon />}
          />
          <SubmitButton>{t("forgot-password.form.submit-button")}</SubmitButton>
        </Form>
      </FormProvider>
    </CenteredBox>
  );
};
