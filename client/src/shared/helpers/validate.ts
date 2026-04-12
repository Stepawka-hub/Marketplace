import { TFunction } from "i18next";
import { TLanguage } from "../types";
import { LANGUAGES } from "../constants";

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

export const emailValidation = (t: TFunction) => ({
  pattern: {
    value: EMAIL_REGEX,
    message: t("form.validation.email-invalid"),
  },
});

export const isValidLanguage = (value: string): value is TLanguage =>
  LANGUAGES.includes(value as TLanguage);

export const positiveNumberValidation = (t: TFunction) => ({
  min: {
    value: 1,
    message: t("form.validation.positive-number"),
  },
  validate: (value: number) => {
    return value > 0 || t("form.validation.positive-number");
  },
});

export const futureDateValidation = (t: TFunction) => ({
  validate: (value: string) => {
    const date = new Date(value);
    const now = new Date();
    return date > now || t("form.validation.future-date");
  },
});

export const dateAfterValidation = (compareTo: string, t: TFunction) => ({
  validate: (value: string, formValues: any) => {
    const startDate = new Date(formValues[compareTo]);
    const endDate = new Date(value);
    return (
      endDate > startDate ||
      t("form.validation.date-after", { field: compareTo })
    );
  },
});
