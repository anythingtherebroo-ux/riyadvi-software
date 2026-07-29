import axios from "axios";

// Uses VITE_API_URL from your .env file when it's set (e.g. your live backend URL
// on Render/Railway/your server), and falls back to localhost for local development.
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

export default API;