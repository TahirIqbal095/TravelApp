import useAuth from "./useAuth";
const API_URL = import.meta.env.VITE_API_URL;

function useRefreshToken() {
    const { setAuth } = useAuth();
    const refreshToken = localStorage.getItem("refreshToken");
    const username = localStorage.getItem("username");

    const newAccessToken = async () => {
        try {
            const response = await fetch(
                `${API_URL}/api/users/token/refresh/`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                        refresh: refreshToken,
                    }),
                }
            );

            if (response.status == 400) {
                return null;
            } else {
                const data = await response.json();

                setAuth((prev) => {
                    return {
                        ...prev,
                        accessToken: data.access,
                        user: username,
                    };
                });
                return data.access;
            }
        } catch (error) {
            console.error(`refresh token error : ${error}`);
        }
    };

    return newAccessToken;
}

export default useRefreshToken;
