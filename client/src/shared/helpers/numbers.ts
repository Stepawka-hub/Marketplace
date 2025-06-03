import { LOCALE_MAP } from "@shared/constants/locale";

export const formattedWithSpace = (number: number, locale = "ru") =>
  new Intl.NumberFormat(LOCALE_MAP[locale], {
    style: "decimal",
  }).format(number);
