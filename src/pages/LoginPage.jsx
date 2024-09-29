import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { Spinner } from "@nextui-org/react";

const API_URL = import.meta.env.VITE_API_URL;

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState();
    const [hidePassword, setHidePassword] = useState(true);
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // toast messages
    const toastMessageSucess = () => toast.success("You are Logged in");
    const toastMessageFailed = (message) => {
        toast.error(message);
    };

    const togglePassword = () => {
        setHidePassword((prev) => !prev);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch(`${API_URL}/api/users/login/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    phone_number: username,
                    password: password,
                }),
            });

            const data = await response.json();

            if (response.status === 401) {
                toastMessageFailed(data?.detail);
            } else if (response.status === 200) {
                const user = data?.user?.username;
                const accessToken = data?.access;
                const refreshToken = data?.refresh;

                localStorage.setItem("accessToken", accessToken);
                localStorage.setItem("refreshToken", refreshToken);
                localStorage.setItem("username", user);

                setAuth({ user, accessToken });
                const from = location.state?.from || "/me";
                navigate(from);
                toastMessageSucess();
            } else {
                toastMessageFailed(
                    "Something went wrong. Please try again later"
                );
            }
        } catch (error) {
            toastMessageFailed("Server is not responding, Please try again");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-gray-50">
            <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
                <div className="max-w-md w-full">
                    <div className="p-8 rounded-2xl bg-white shadow">
                        <h2 className="text-gray-800 text-center text-2xl font-bold">
                            Sign in
                        </h2>
                        <form
                            className="mt-8 space-y-4"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">
                                    Username
                                </label>
                                <div className="relative flex items-center">
                                    <input
                                        name="username"
                                        type="text"
                                        required
                                        className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                                        placeholder="Enter Username"
                                        onChange={(e) => {
                                            setUsername(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-gray-800 text-sm mb-2 block">
                                    Password
                                </label>
                                <div className="relative flex items-center">
                                    <input
                                        name="password"
                                        type={
                                            hidePassword ? "password" : "text"
                                        }
                                        required
                                        className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                                        placeholder="Enter password"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="#bbb"
                                        stroke="#bbb"
                                        className="w-4 h-4 absolute right-4 cursor-pointer"
                                        viewBox="0 0 128 128"
                                        onClick={togglePassword}
                                    >
                                        <path
                                            d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                                            data-original="#000000"
                                        ></path>
                                    </svg>
                                </div>
                            </div>

                            <div className="text-sm">
                                <a
                                    href=""
                                    className="text-blue-600 hover:underline font-semibold"
                                >
                                    Forgot your password?
                                </a>
                            </div>

                            <div className="!mt-8">
                                <button
                                    type="submit"
                                    className="flex justify-center items-center gap-1 w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                                >
                                    <span className="font-semibold">Login</span>
                                    <span>
                                        {" "}
                                        {isLoading ? (
                                            <Spinner
                                                color="default"
                                                size="sm"
                                            />
                                        ) : (
                                            ""
                                        )}
                                    </span>
                                </button>
                            </div>
                            <p className="text-gray-800 text-sm !mt-8 text-center">
                                Don't have an account?{" "}
                                <Link
                                    to={"/signup"}
                                    className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                                >
                                    Register here
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
