import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import SharedLayout from "./pages/SharedLayout.jsx";
import DetailPage from "./pages/DetailsPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import PackagePage from "./pages/PackagePage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import TrendingPage from "./pages/TrendingPage.jsx";

import "./index.css";
import FilterPackage from "./pages/FilterPackage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "package/details/:id",
        element: <DetailPage />,
      },
      {
        path: "packages",
        element: <PackagePage />,
      },
      {
        path: "trending",
        element: <TrendingPage />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "packages/categories/:id",
        element: <FilterPackage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </StrictMode>
);
