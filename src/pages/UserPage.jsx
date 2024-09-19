import { useEffect, useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useLocation, useNavigate } from "react-router-dom";

function UserPage() {
    const [user, setUser] = useState();
    const axiosPrivate = useAxiosPrivate();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUser = async () => {
            try {
                const resposne = await axiosPrivate.get("/api/users/me/", {
                    signal: controller.signal,
                });

                isMounted && setUser(resposne.data);
            } catch (error) {
                console.error(`Error fetching user: ${error}`);
                navigate("/login", {
                    state: { from: location },
                    replace: true,
                });
            }
        };

        getUser();

        return () => {
            isMounted = false;
            controller.abort();
        };
    });
    return (
        <div>
            <h1>User Page</h1>
        </div>
    );
}

export default UserPage;
