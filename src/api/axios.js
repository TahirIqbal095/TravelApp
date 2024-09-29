import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
const BASE_URL = API_URL;

export default axios.create({
    baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});
