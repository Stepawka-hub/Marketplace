import { Button, Grid, TextField } from "@mui/material";
import { Form } from "@ui/form";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { TRegisterForm } from "./types";
import { useTranslation } from "react-i18next";

export const RegisterForm: FC = () => {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm<TRegisterForm>();

  const onSubmit: SubmitHandler<TRegisterForm> = (formData) => {
    console.log(formData);
  };

  return (
    <Grid container sx={{ justifyContent: "center", mt: 10 }}>
      <Grid size={6}>
        <Form
          title={t("register-form.title")}
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            id="firstName"
            label={t("register-form.fields.firstName.label")}
            placeholder={t("register-form.fields.firstName.placeholder")}
            variant="standard"
            {...(register("firstName"),
            {
              // required: "This field is required"
            })}
          />
          <TextField
            id="lastName"
            label={t("register-form.fields.lastName.label")}
            placeholder={t("register-form.fields.lastName.placeholder")}
            variant="standard"
            {...(register("lastName"),
            {
              // required: "This field is required"
            })}
          />
          <TextField
            id="email"
            label={t("register-form.fields.email.label")}
            placeholder={t("register-form.fields.email.placeholder")}
            variant="standard"
            {...(register("email"),
            {
              // required: "This field is required"
            })}
          />
          <TextField
            id="phone"
            label={t("register-form.fields.phone.label")}
            placeholder={t("register-form.fields.phone.placeholder")}
            variant="standard"
            {...(register("phone"),
            {
              // required: "This field is required"
            })}
          />
          <TextField
            id="password"
            label={t("register-form.fields.password.label")}
            placeholder={t("register-form.fields.password.placeholder")}
            variant="standard"
            {...(register("password"),
            {
              // required: "This field is required"
            })}
          />
          <TextField
            id="repeatPassword"
            label={t("register-form.fields.repeatPassword.label")}
            placeholder={t("register-form.fields.repeatPassword.placeholder")}
            variant="standard"
            {...(register("repeatPassword"),
            {
              required: "This field is required"
            })}
          />
          <Button type="submit">Зарегистрироваться</Button>
        </Form>
      </Grid>
    </Grid>
  );
};
