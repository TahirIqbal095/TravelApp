import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = () => {
    const { auth } = useAuth();
    const location = useLocation();

    return auth?.username ? (
        <Outlet />
    ) : (
        <Navigate to="/signup" state={{ from: location }} replace />
    );
};

export default PrivateRoutes;
