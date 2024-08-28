import HomePage from "./pages/HomePage.jsx";
import SharedLayout from "./pages/SharedLayout.jsx";
import DetailPage from "./pages/DetailsPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";

import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SharedLayout />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path="/package/details/:id" element={<DetailPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
