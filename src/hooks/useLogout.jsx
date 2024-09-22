import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const useLogout = () => {
    const navigate = useNavigate();
    const { setAuth } = useAuth();

    const logout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        setAuth({});
        navigate("/login");
    };
    return logout;
};

export default useLogout;
