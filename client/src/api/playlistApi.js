import axios from "axios";
const SERVER_URI = import.meta.env.VITE_SERVER_URI;

export const playlistApi = axios.create({
  baseURL: `${SERVER_URI}/playlists`,
  withCredentials: true,
});
