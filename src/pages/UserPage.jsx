import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

function UserPage() {
    const [user, setUser] = useState();
    const axiosPrivate = useAxiosPrivate();
    const location = useLocation();
    const navigate = useNavigate();
    const access = localStorage.getItem("accessToken");

    useEffect(() => {
        let isMounted = true;

        const getUser = async () => {
            try {
                const response = await axiosPrivate.get(
                    "https://adlizone.pythonanywhere.com/api/users/profile/",

                    {
                        headers: {
                            Authorization: `Bearer ${access}`,
                        },
                    }
                );

                if (isMounted) setUser(response?.data);
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
        };
    }, []);
    return (
        <div className="my-44 text-center">
            <h1 className="text-5xl">{user?.user}</h1>
        </div>
    );
}

export default UserPage;
