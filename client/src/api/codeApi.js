import axios from "axios";
const SERVER_URI = import.meta.env.VITE_SERVER_URI;

export const codeApi = axios.create({
  baseURL: `${SERVER_URI}/code`,
  withCredentials: true,
});
