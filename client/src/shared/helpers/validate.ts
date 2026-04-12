import { TFunction } from "i18next";
import { TLanguage } from "../types";
import { LANGUAGES } from "../constants";

const FORM_VALIDATION_KEY = "form.validation";

export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const PRICE_REGEX = /^\d+(\.\d{1,2})?$/;

export const isValidLanguage = (value: string): value is TLanguage =>
  LANGUAGES.includes(value as TLanguage);

export const minLengthValidation = (minLength: number, t: TFunction) => ({
  minLength: {
    value: minLength,
    message: t(`${FORM_VALIDATION_KEY}.minLength`, { count: minLength }),
  },
});

export const maxLengthValidation = (maxLength: number, t: TFunction) => ({
  maxLength: {
    value: maxLength,
    message: t(`${FORM_VALIDATION_KEY}.maxLength`, { count: maxLength }),
  },
});

export const requiredValidation = (t: TFunction) => ({
  required: t(`${FORM_VALIDATION_KEY}.required`),
});

export const emailValidation = (t: TFunction) => ({
  pattern: {
    value: EMAIL_REGEX,
    message: t(`${FORM_VALIDATION_KEY}.email-invalid`),
  },
});

export const minValidation = (min: number, t: TFunction) => ({
  min: {
    value: min,
    message: t(`${FORM_VALIDATION_KEY}.min`, { value: min }),
  },
});

export const maxValidation = (max: number, t: TFunction) => ({
  max: {
    value: max,
    message: t(`${FORM_VALIDATION_KEY}.max`, { value: max }),
  },
});

export const minMaxValidation = (min: number, max: number, t: TFunction) => ({
  min: {
    value: min,
    message: t(`${FORM_VALIDATION_KEY}.min`, { value: min }),
  },
  max: {
    value: max,
    message: t(`${FORM_VALIDATION_KEY}.max`, { value: max }),
  },
});

export const priceValidation = (min: number, max: number, t: TFunction) => ({
  ...minMaxValidation(min, max, t),
  pattern: {
    value: PRICE_REGEX,
    message: t(`${FORM_VALIDATION_KEY}.price-format`),
  },
});

export const positiveNumberValidation = (t: TFunction) => ({
  min: {
    value: 1,
    message: t(`${FORM_VALIDATION_KEY}.positive-number`),
  },
  validate: (value: number) => {
    return value > 0 || t(`${FORM_VALIDATION_KEY}.positive-number`);
  },
});

export const futureDateValidation = (t: TFunction) => ({
  validate: (value: string) => {
    const date = new Date(value);
    const now = new Date();
    return date > now || t(`${FORM_VALIDATION_KEY}.future-date`);
  },
});

export const endTimeRangeValidation = (
  minDays: number,
  maxDays: number,
  t: TFunction,
  customMessages?: {
    min?: string;
    max?: string;
  },
) => ({
  validate: (value: string) => {
    const endTime = new Date(value);
    const now = new Date();
    const minEndTime = new Date(now.getTime() + minDays * 24 * 60 * 60 * 1000);
    const maxEndTime = new Date(now.getTime() + maxDays * 24 * 60 * 60 * 1000);

    if (endTime < minEndTime) {
      const messageKey =
        customMessages?.min ?? `${FORM_VALIDATION_KEY}.end-time-min`;
      return t(messageKey, { days: minDays });
    }
    if (endTime > maxEndTime) {
      const messageKey =
        customMessages?.max ?? `${FORM_VALIDATION_KEY}.end-time-max`;
      return t(messageKey, { days: maxDays });
    }
    return true;
  },
});
