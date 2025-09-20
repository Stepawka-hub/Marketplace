import { LANGUAGES_MAP, THEMES_MAP } from "../constants";

export type TLanguage = (typeof LANGUAGES_MAP)[keyof typeof LANGUAGES_MAP];

export type TTheme = (typeof THEMES_MAP)[keyof typeof THEMES_MAP];
