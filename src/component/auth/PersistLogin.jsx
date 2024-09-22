import useAuth from "../../hooks/useAuth";
import useRefreshToken from "../../hooks/useRefreshToken";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function PersistLogin() {
    const refresh = useRefreshToken();
    const { auth } = useAuth();
    const [isLoading, setIsLoading] = useState();

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                await refresh();
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
    }, []);

    return <>{isLoading ? <div>Loading...</div> : <Outlet />}</>;
}

export default PersistLogin;
