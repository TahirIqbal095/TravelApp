import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { Link } from "react-router-dom";

function UserPage() {
    const [user, setUser] = useState();
    const [isAuth, setIsAuth] = useState(false);
    const axiosPrivate = useAxiosPrivate();
    const location = useLocation();
    const navigate = useNavigate();
    const accessToken = localStorage.getItem("accessToken");

    useEffect(() => {
        const controller = new AbortController();

        const getUser = async () => {
            try {
                const response = await axiosPrivate.get("/api/users/profile/", {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                    signal: controller.signal,
                });

                setIsAuth(true);
                setUser(response?.data);
            } catch (error) {
                console.log(error);

                if (error.response?.status === 401) {
                    setIsAuth(false);
                    navigate("/login", {
                        state: { from: location },
                        replace: true,
                    });
                } else {
                    console.error(`error fetching profile data ${error}`);
                }
            }
        };

        getUser();

        return () => {
            controller.abort(); // Cancel request on component unmount
        };
    }, []);
    return (
        <div className="my-44 text-center">
            {isAuth ? (
                <h1 className="text-5xl">{user?.user}</h1>
            ) : (
                <>
                    <h2>Please login first</h2>
                    <Link to={"/login"}>Login</Link>
                </>
            )}
        </div>
    );
}

export default UserPage;
