import { Outlet } from "react-router-dom";
import Nav from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";

import { Toaster } from "react-hot-toast";

function SharedLayout() {
    return (
        <>
            <Nav />
            <Toaster position="bottom-right" reverseOrder={false} />
            <Outlet />
            <Footer />
        </>
    );
}

export default SharedLayout;
