import { TFunction } from "i18next";

export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const minLengthValidation = (minLength: number, t: TFunction) => ({
  minLength: {
    value: minLength,
    message: t("form.validation.minLength", { count: minLength }),
  },
});

export const maxLengthValidation = (maxLength: number, t: TFunction) => ({
  maxLength: {
    value: maxLength,
    message: t("form.validation.maxLength", { count: maxLength }),
  },
});

export const requiredValidation = (t: TFunction) => ({
  required: t("form.validation.required"),
});
