import axios from "axios";

// Use local API route instead of direct API URL
const API_URL = "/api/auth/token/";

export interface LoginResponse {
  refresh: string;
  access: string;
}

export const login = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  try {
    console.log("Sending login request to:", API_URL);
    const response = await axios.post(API_URL, {
      username,
      password,
    });
    console.log("Response received:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw new Error("Invalid credentials");
  }
};

export const setAuthToken = (token: string) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("token", token);
  } else {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
  }
};

export const getAuthToken = () => {
  return localStorage.getItem("token");
};

export const logout = () => {
  setAuthToken("");
  window.location.href = "/login";
};

axios.defaults.headers.post["Content-Type"] = "application/json";
