import axios from 'axios';
import {API_URL} from "../constants/urls";

const baseAPI = axios.create({
    baseURL: `${API_URL}`,
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default baseAPI