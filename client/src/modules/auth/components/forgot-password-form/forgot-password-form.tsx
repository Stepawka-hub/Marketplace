import { Button } from "@mui/material";
import { emailValidation, requiredValidation } from "@shared/helpers/validate";
import { CenteredGrid } from "@ui/centered-grid";
import { Input } from "@ui/form-elements";
import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { TForgotPasswordForm } from "./type";
import { Form } from "@ui/form";

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
    <CenteredGrid>
      <FormProvider {...methods}>
        <Form title={t("forgot-password.form.title")} onSubmit={onSubmit}>
          <Input
            label={t("forgot-password.form.fields.email.label")}
            placeholder={t("forgot-password.form.fields.email.placeholder")}
            {...register("email", {
              ...requiredValidation(t),
              ...emailValidation(t),
            })}
          />
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            {t("forgot-password.form.submit-button")}
          </Button>
        </Form>
      </FormProvider>
    </CenteredGrid>
  );
};
