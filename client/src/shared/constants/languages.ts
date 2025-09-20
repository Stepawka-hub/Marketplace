import { TLanguage } from "../types";

export const LANGUAGES_MAP = {
  RU: "ru",
  EN: "en",
} as const;

export const LANGUAGES: TLanguage[] = [
  LANGUAGES_MAP.RU,
  LANGUAGES_MAP.EN,
] as const;
