import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainContainer from "../container/MainContainer";
import { Category, ErrorElement, Quiz } from "../pages";
import { getWithExpiry } from "../utils";

const router = createBrowserRouter([
  {
    errorElement: <ErrorElement />,
    element: <MainContainer />,
    children: [
      {
        element: <Category />,
        path: "/",
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
    ],
  },
]);

export default router;
