import { FC, Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { ThemeProvider } from "@providers/theme/theme-provider";
import { CssBaseline } from "@mui/material";

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
