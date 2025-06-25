import { Button } from "@mui/material";
import {
  maxLengthValidation,
  minLengthValidation,
  requiredValidation,
} from "@shared/helpers/validate";
import { CenteredGrid } from "@ui/centered-grid";
import { Form } from "@ui/form";
import { PasswordInput } from "@ui/form-elements";
import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { TResetPasswordForm } from "./type";

export const ResetPasswordForm: FC = () => {
  const { t } = useTranslation();
  const methods = useForm<TResetPasswordForm>({ mode: "onChange" });
  const { register, handleSubmit } = methods;
  // const navigate = useNavigate();

  const onSubmit = handleSubmit((formData) => {
    console.log(formData);

    // resetPasswordApi({ password, token })
    //   .then(() => {
    //     localStorage.removeItem('resetPassword');
    //     navigate('/login');
    //   })
    //   .catch((err) => setError(err))
    //   .finally(() => setIsFetching(false));
  });

  // useEffect(() => {
  //   if (!localStorage.getItem("resetPassword")) {
  //     navigate("/forgot-password", { replace: true });
  //   }
  // }, [navigate]);

  return (
    <CenteredGrid>
      <FormProvider {...methods}>
        <Form title={t("repeat-password.form.title")} onSubmit={onSubmit}>
          <PasswordInput
            {...register("password", {
              ...requiredValidation(t),
              ...minLengthValidation(8, t),
              ...maxLengthValidation(100, t),
            })}
          />
          <PasswordInput
            label="Repeat password"
            {...register("confirmPassword", {
              ...requiredValidation(t),
              ...minLengthValidation(8, t),
              ...maxLengthValidation(100, t),
            })}
          />
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            {t("repeat-password.form.submit-button")}
          </Button>
        </Form>
      </FormProvider>
    </CenteredGrid>
  );
};
