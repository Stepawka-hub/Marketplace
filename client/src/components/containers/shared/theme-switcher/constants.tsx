import { ReactNode } from "react";
import { Theme } from "@/providers";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";

export const THEMES: Theme[] = ["light", "dark", "system"];

export const THEME_ICONS: Record<Theme, ReactNode> = {
  light: <LightModeIcon />,
  dark: <DarkModeIcon />,
  system: <SettingsBrightnessIcon />,
};
