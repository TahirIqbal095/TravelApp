import useAuth from "./useAuth";

function useRefreshToken() {
    const { auth, setAuth } = useAuth();

    const refresh = async () => {
        const resposne = await fetch(
            "https://adlizone.pythonanywhere.com/api/users/token/refresh/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    refresh: auth.refresh,
                }),
            }
        );

        const data = await resposne.json();

        setAuth((prev) => {
            console.log(JSON.stringify(prev));
            console.log(data);
            return { ...prev, access: data.access };
        });

        return data.access;
    };

    return refresh;
}

export default useRefreshToken;
