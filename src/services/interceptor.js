import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:3000/v1",
  baseURL: "https://phonewebsitebackend.onrender.com/v1",
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = "thisisasampletoken";
    if (token) {
      config.headers["X-Api-Key"] = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
