import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { Button } from "@nextui-org/react";
import useLogout from "../hooks/useLogout";

function UserPage() {
    const [user, setUser] = useState();

    const location = useLocation();
    const navigate = useNavigate();
    const axiosPrivate = useAxiosPrivate();
    const logout = useLogout();

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
        <div className="p-16">
            <div className="p-8 bg-white shadow mt-24">
                <div className="relative">
                    <div className="w-48 h-48 bg-white mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-blue-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-16 w-16"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
                <div className="mt-32 text-center border-b pb-12">
                    <h1 className="text-4xl font-medium text-gray-700">
                        {user?.user}
                    </h1>
                    <p className="font-light text-gray-600 mt-2">
                        email@gmail.com
                    </p>
                </div>

                <Button color="danger" onClick={logout} className="mt-8">
                    Logout
                </Button>
            </div>
        </div>
    );
}

export default UserPage;
