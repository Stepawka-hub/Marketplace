import { Button, Grid } from "@mui/material";
import { Form } from "@ui/form";
import { Input } from "@ui/input";
import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { TRegisterForm } from "./types";

export const RegisterForm: FC = () => {
  const { t } = useTranslation();
  const methods = useForm<TRegisterForm>({
    mode: "onChange",
  });
  const { register, handleSubmit } = methods;

  const onSubmit = handleSubmit((formData) => {
    console.log(formData);
  });

  return (
    <Grid container sx={{ justifyContent: "center", mt: 10 }}>
      <Grid size={{ xs: 12, md: 8, lg: 6 }}>
        <FormProvider {...methods}>
          <Form title={t("register-form.title")} onSubmit={onSubmit}>
            <Input
              label={t("register-form.fields.firstName.label")}
              placeholder={t("register-form.fields.firstName.placeholder")}
              {...register("firstName", {
                required: "This field is required",
              })}
            />
            <Input
              label={t("register-form.fields.lastName.label")}
              placeholder={t("register-form.fields.lastName.placeholder")}
              {...register("lastName", {
                required: "This field is required",
              })}
            />
            <Input
              label={t("register-form.fields.email.label")}
              placeholder={t("register-form.fields.email.placeholder")}
              {...register("email", {
                required: "This field is required",
              })}
            />
            <Input
              label={t("register-form.fields.phone.label")}
              placeholder={t("register-form.fields.phone.placeholder")}
              {...register("phone")}
            />
            <Input
              label={t("register-form.fields.password.label")}
              placeholder={t("register-form.fields.password.placeholder")}
              {...register("password", {
                required: "This field is required",
              })}
            />
            <Input
              label={t("register-form.fields.repeatPassword.label")}
              placeholder={t("register-form.fields.repeatPassword.placeholder")}
              {...register("repeatPassword", {
                required: "This field is required",
              })}
            />
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Зарегистрироваться
            </Button>
          </Form>
        </FormProvider>
      </Grid>
    </Grid>
  );
};
