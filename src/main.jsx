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
import UserPage from "./pages/UserPage.jsx";
import PersistLogin from "./component/auth/PersistLogin.jsx";

import FilterPackage from "./pages/FilterPackage.jsx";
import Login from "./pages/LoginPage.jsx";
import Signup from "./pages/SignupPage.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";

import "./index.css";

const router = createBrowserRouter([
    {
        element: <PersistLogin />,
        children: [
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
                        path: "me",
                        element: <UserPage />,
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
                        path: "package/details/:id",
                        element: <DetailPage />,
                    },

                    {
                        path: "packages/categories/:id",
                        element: <FilterPackage />,
                    },
                    {
                        path: "login",
                        element: <Login />,
                    },
                    {
                        path: "signup",
                        element: <Signup />,
                    },
                ],
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <NextUIProvider>
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
        </NextUIProvider>
    </StrictMode>
);
