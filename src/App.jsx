import HomePage from "./pages/HomePage.jsx";
import SharedLayout from "./pages/SharedLayout.jsx";
import DetailPage from "./pages/DetailsPage.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/package/details/:id" element={<DetailPage />} />
          {/* <Route path="package/details/:id/booknow" element={<DetailPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
