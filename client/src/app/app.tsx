import { type FC } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from './routes/routes';

export const App: FC = () => {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
};
