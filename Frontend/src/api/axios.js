// src/api/axios.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/auth", // Change to your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
