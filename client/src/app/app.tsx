import { FC, Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { ThemeProvider } from "@providers/theme/theme-provider";
import { CssBaseline, Paper } from "@mui/material";

export const App: FC = () => {
  return (
    <Suspense fallback="">
      <ThemeProvider storageKey="vite-ui-theme">
        <CssBaseline />
        <Paper sx={{ minHeight: "100vh", height: "100%" }}>
          <RouterProvider router={router} />
        </Paper>
      </ThemeProvider>
    </Suspense>
  );
};
