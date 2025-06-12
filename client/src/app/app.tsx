import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@providers/theme/theme-provider";
import { FC, Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

export const App: FC = () => {
  return (
    <Suspense fallback="">
      <ThemeProvider storageKey="vite-ui-theme">
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Suspense>
  );
};
