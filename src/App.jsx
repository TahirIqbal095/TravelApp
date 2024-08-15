import HomePage from "./pages/HomePage.jsx";
import DetailsPackagePage from "./pages/DetailsPackagePage.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import EnquiryForm from "./component/form/EnquiryForm.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="package/details/:id" element={<DetailsPackagePage />} />
        <Route path="enquiry-form" element={<EnquiryForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
