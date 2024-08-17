import { Outlet } from "react-router-dom";
import Nav from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";

function SharedLayout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default SharedLayout;
