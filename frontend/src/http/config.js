import axios from "axios";

export const BASE_URL = "http://localhost:8000/api/";
export const ClientURL = axios.create({ baseURL: BASE_URL });
