import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const useLogout = () => {
    const navigate = useNavigate();
    const { setAuth } = useAuth();

    const logout = () => {
        localStorage.clear();
        setAuth({});
        navigate("/login");
    };
    return logout;
};

export default useLogout;
