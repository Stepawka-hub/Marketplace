import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useCreateSellerRequestMutation } from "@/services";
import {
  requiredValidation,
  emailValidation,
  minLengthValidation,
  maxLengthValidation,
  innValidation,
} from "@/shared/helpers";

import { Input, Select, Checkbox } from "@/components/containers";
import { Form } from "@/components/elements";
import { SubmitButton } from "@/components/ui";
import { TextField, Typography, Link, Box } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import {
  SELLER_REGISTRATION_PREFIX,
  SELLER_REGISTRATION_FIELDS,
} from "./constants";
import { REGISTRATION_TYPES } from "@/shared/constants";
import { TSellerRequestForm } from "./types";
import { fieldSetStyle, formStyle } from "./styles";

const {
  REGISTRATION_TYPE,
  COMPANY_NAME,
  INN,
  PHONE,
  EMAIL,
  DESCRIPTION,
  AGREEMENT,
} = SELLER_REGISTRATION_FIELDS;

export const SellerRequestForm: FC = () => {
  const { t } = useTranslation();
  const methods = useForm<TSellerRequestForm>({
    mode: "onChange",
    defaultValues: {
      [REGISTRATION_TYPE]: REGISTRATION_TYPES.IP,
      [AGREEMENT]: false,
    },
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid },
  } = methods;
  const registrationType = watch(REGISTRATION_TYPE);

  const [createSellerRequest, { isLoading }] = useCreateSellerRequestMutation();

  const getFieldTranslation = (field: string, type: "label" | "placeholder") =>
    t(`${SELLER_REGISTRATION_PREFIX}.${field}.${type}`);

  const onSubmit = handleSubmit((formData) => {
    createSellerRequest(formData);
  });

  return (
    <FormProvider {...methods}>
      <Form
        title={t("seller-requests.form.title")}
        sx={formStyle}
        onSubmit={onSubmit}
      >
        <Select
          label={getFieldTranslation(REGISTRATION_TYPE, "label")}
          options={Object.values(REGISTRATION_TYPES).map((type) => ({
            value: type,
            label: t(`seller-requests.form.types.${type}`),
          }))}
          {...register(REGISTRATION_TYPE, {
            ...requiredValidation(t),
          })}
        />

        <Box component="fieldset" sx={fieldSetStyle}>
          <Input
            label={getFieldTranslation(COMPANY_NAME, "label")}
            placeholder={getFieldTranslation(COMPANY_NAME, "placeholder")}
            startIcon={<BusinessIcon />}
            {...register(COMPANY_NAME, {
              ...requiredValidation(t),
              ...minLengthValidation(2, t),
              ...maxLengthValidation(100, t),
            })}
          />

          <Input
            label={getFieldTranslation(INN, "label")}
            placeholder={getFieldTranslation(INN, "placeholder")}
            startIcon={<BusinessIcon />}
            helperText={t(`seller-requests.form.inn-hint.${registrationType}`)}
            {...register(INN, {
              ...requiredValidation(t),
              ...innValidation(registrationType, t),
            })}
          />
        </Box>

        <Box component="fieldset" sx={fieldSetStyle}>
          <Input
            label={getFieldTranslation(PHONE, "label")}
            placeholder={getFieldTranslation(PHONE, "placeholder")}
            startIcon={<PhoneIcon />}
            {...register(PHONE, {
              ...requiredValidation(t),
              ...minLengthValidation(10, t),
            })}
          />

          <Input
            label={getFieldTranslation(EMAIL, "label")}
            placeholder={getFieldTranslation(EMAIL, "placeholder")}
            startIcon={<EmailIcon />}
            {...register(EMAIL, {
              ...requiredValidation(t),
              ...emailValidation(t),
            })}
          />
        </Box>

        <TextField
          label={getFieldTranslation(DESCRIPTION, "label")}
          placeholder={getFieldTranslation(DESCRIPTION, "placeholder")}
          multiline
          rows={3}
          fullWidth
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          {...register(DESCRIPTION, {
            ...maxLengthValidation(512, t),
          })}
        />

        <Checkbox
          label={
            <Typography variant="body2">
              {t("seller-requests.form.agreement.part1")}{" "}
              <Link href="/terms" target="_blank">
                {t("seller-requests.form.agreement.terms")}
              </Link>
              {", "}
              <Link href="/privacy" target="_blank">
                {t("seller-requests.form.agreement.privacy")}
              </Link>{" "}
              {t("seller-requests.form.agreement.part2")}
            </Typography>
          }
          {...register(AGREEMENT, {
            required: t("validation.required"),
          })}
        />

        <SubmitButton disabled={!isValid || isLoading}>
          {t("seller-requests.form.submit-button")}
        </SubmitButton>
      </Form>
    </FormProvider>
  );
};
