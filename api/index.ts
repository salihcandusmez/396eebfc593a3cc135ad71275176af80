import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "X-Access-Token": process.env.NEXT_PUBLIC_API_KEY,
    "Content-Type": "application/json",
  },
});

export default api;
