import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { Link } from "react-router-dom";

function UserPage() {
    const [user, setUser] = useState();
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

                setUser(response?.data);
            } catch (error) {
                console.log(error);

                if (error.response?.status === 401) {
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
            <h1 className="text-5xl">{user?.user}</h1>
        </div>
    );
}

export default UserPage;
