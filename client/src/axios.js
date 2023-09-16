import axios from "axios";

const instance = axios.create({
    baseURL: process.env.serverBaseUrl || "http://localhost:8001"
});

export default instance;