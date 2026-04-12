import { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useUpdateProfileMutation } from "@/services";
import {
  maxLengthValidation,
  minLengthValidation,
  requiredValidation,
} from "@/shared/helpers";

import { Input, PasswordInput } from "@/components/containers";
import { Modal, Form } from "@/components/elements";
import { Button, Stack } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import { TEditProfileFormData, TEditProfileModalProps } from "./types";
import { EDIT_PROFILE_FIELDS } from "./constants";
import { formStyle } from "./styles";

export const EditProfileModal: FC<TEditProfileModalProps> = ({
  isOpen,
  userData,
  onSuccess,
  onClose,
}) => {
  const { t } = useTranslation();
  const methods = useForm<TEditProfileFormData>();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = methods;
  const { FIRST_NAME, LAST_NAME, PHONE, PASSWORD, CONFIRM_PASSWORD } =
    EDIT_PROFILE_FIELDS;

  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  useEffect(() => {
    if (isOpen) {
      reset({
        firstName: userData.firstName,
        lastName: userData.lastName,
        phone: userData.phone || "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [isOpen, userData, reset]);

  const onSubmit = async (data: TEditProfileFormData) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: t("form.validation.passwords-not-match"),
      });

      return;
    }

    try {
      const { firstName, lastName, phone, password } = data;

      await updateProfile({
        firstName,
        lastName,
        phone,
        password,
      }).unwrap();

      onSuccess();
      onClose();
    } catch (error) {
      console.error("Ошибка обновления: ", error);
    }
  };

  const getFieldTranslation = (field: string, type: "label" | "placeholder") =>
    t(`form.fields.${field}.${type}`);

  return (
    <Modal
      title={t("profile.edit-modal.title")}
      isOpen={isOpen}
      onClose={onClose}
    >
      <FormProvider {...methods}>
        <Form sx={formStyle} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <Input
              label={getFieldTranslation(FIRST_NAME, "label")}
              placeholder={getFieldTranslation(FIRST_NAME, "placeholder")}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              startIcon={<PersonIcon />}
              {...register(FIRST_NAME, { ...requiredValidation(t) })}
            />
            <Input
              label={getFieldTranslation(LAST_NAME, "label")}
              placeholder={getFieldTranslation(LAST_NAME, "placeholder")}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
              startIcon={<PersonIcon />}
              {...register(LAST_NAME, { ...requiredValidation(t) })}
            />
            <Input
              label={getFieldTranslation(PHONE, "label")}
              placeholder={getFieldTranslation(PHONE, "placeholder")}
              error={!!errors.phone}
              startIcon={<PhoneIcon />}
              {...register(PHONE)}
            />
            <PasswordInput
              label={getFieldTranslation(PASSWORD, "label")}
              placeholder={getFieldTranslation(PASSWORD, "placeholder")}
              {...register(PASSWORD, {
                ...requiredValidation(t),
                ...minLengthValidation(8, t),
                ...maxLengthValidation(100, t),
              })}
            />

            <PasswordInput
              label={getFieldTranslation(CONFIRM_PASSWORD, "label")}
              placeholder={getFieldTranslation(CONFIRM_PASSWORD, "placeholder")}
              {...register(CONFIRM_PASSWORD, {
                ...requiredValidation(t),
                ...minLengthValidation(8, t),
                ...maxLengthValidation(100, t),
              })}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isLoading}
              sx={{ mt: 1 }}
            >
              {isLoading
                ? t("common.actions.saving")
                : t("common.actions.save")}
            </Button>
          </Stack>
        </Form>
      </FormProvider>
    </Modal>
  );
};
