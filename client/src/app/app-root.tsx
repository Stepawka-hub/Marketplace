import { FC, Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ThemeProvider } from "@/providers/theme";
import { CssBaseline } from "@mui/material";

export const AppRoot: FC = () => {
  return (
    <Suspense fallback="">
      <ThemeProvider storageKey="vite-ui-theme">
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Suspense>
  );
};
