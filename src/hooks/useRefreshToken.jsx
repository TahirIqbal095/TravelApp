import useAuth from "./useAuth";

function useRefreshToken() {
    const { setAuth } = useAuth();
    const refreshToken = localStorage.getItem("refreshToken");

    const newAccessToken = async () => {
        const response = await fetch(
            "https://adlizone.pythonanywhere.com/api/users/token/refresh/",
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

        const data = await response.json();

        setAuth((prev) => {
            return {
                ...prev,
                accessToken: data.access,
                refreshToken: refreshToken,
            };
        });
        return data.access;
    };

    return newAccessToken;
}

export default useRefreshToken;
