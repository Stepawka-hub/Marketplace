import { createContext } from "react";
import { ThemeProviderState } from "./types";
import { THEMES_MAP } from "@/shared/constants";

const initialState: ThemeProviderState = {
  theme: THEMES_MAP.SYSTEM,
  setTheme: () => null,
};

export const ThemeContext = createContext<ThemeProviderState>(initialState);
