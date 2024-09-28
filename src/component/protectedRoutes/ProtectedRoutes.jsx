import useAuth from "../../hooks/useAuth";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoutes() {
    const { auth } = useAuth();

    return auth?.accessToken ? <Outlet /> : <Navigate to={"/login"} replace />;
}

export default ProtectedRoutes;
