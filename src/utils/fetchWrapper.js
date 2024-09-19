const fetchWrapper = async (url, options = {}) => {
    const accessToken = localStorage.getItem("accessToken");

    const headers = {
        "Content-Type": "application/json",
        ...options.headers,
    };

    if (accessToken) {
        headers["Authorization"] = `Bearer ${accessToken}`;
    }

    const response = await fetch(url, {
        ...options,
        headers,
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
};

export default fetchWrapper;
