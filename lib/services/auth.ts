import { createClient } from "../supabase";
import bcrypt from "bcryptjs";
import * as jose from "jose";
import Cookies from "js-cookie";

const supabase = createClient();

// JWT secret - in production, use environment variable
const JWT_SECRET = "fba900836dd4531e1e713f5361ea63877";
const secret = new TextEncoder().encode(JWT_SECRET);

export interface LoginResponse {
  refresh: string;
  access: string;
  user: {
    id: string;
    username: string;
    email: string;
    role: string;
    last_login?: string;
  };
}

export interface User {
  id: string;
  username: string;
  email: string;
  role: string;
  is_active: boolean;
  last_login?: string;
}

export const login = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  try {
    // Get user from database
    const { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("username", username)
      .eq("is_active", true)
      .single();

    if (error || !user) {
      throw new Error("Invalid credentials");
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password_hash);
    if (!isValidPassword) {
      throw new Error("Invalid credentials");
    }

    // Update last login
    await supabase
      .from("users")
      .update({ last_login: new Date().toISOString() })
      .eq("id", user.id);

    // Generate JWT tokens
    const accessToken = await new jose.SignJWT({
      userId: user.id,
      username: user.username,
      role: user.role,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1h")
      .sign(secret);

    const refreshToken = await new jose.SignJWT({ userId: user.id })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("7d")
      .sign(secret);

    return {
      access: accessToken,
      refresh: refreshToken,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        last_login: user.last_login,
      },
    };
  } catch (error) {
    console.error("Error during login:", error);
    throw new Error("Invalid credentials");
  }
};

export const verifyToken = async (token: string): Promise<User | null> => {
  try {
    const { payload } = await jose.jwtVerify(token, secret);
    const decoded = payload as { userId: string };

    const { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", decoded.userId)
      .eq("is_active", true)
      .single();

    if (error || !user) {
      return null;
    }

    return {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      is_active: user.is_active,
      last_login: user.last_login,
    };
  } catch (error) {
    console.error("Error verifying token:", error);
    return null;
  }
};

export const refreshToken = async (
  refreshToken: string
): Promise<LoginResponse> => {
  try {
    const { payload } = await jose.jwtVerify(refreshToken, secret);
    const decoded = payload as { userId: string };

    const { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", decoded.userId)
      .eq("is_active", true)
      .single();

    if (error || !user) {
      throw new Error("Invalid refresh token");
    }

    // Generate new tokens
    const newAccessToken = await new jose.SignJWT({
      userId: user.id,
      username: user.username,
      role: user.role,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1h")
      .sign(secret);

    const newRefreshToken = await new jose.SignJWT({ userId: user.id })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("7d")
      .sign(secret);

    return {
      access: newAccessToken,
      refresh: newRefreshToken,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        last_login: user.last_login,
      },
    };
  } catch (error) {
    console.error("Error refreshing token:", error);
    throw new Error("Invalid refresh token");
  }
};

export const setAuthToken = (token: string) => {
  if (token) {
    localStorage.setItem("token", token);
  } else {
    localStorage.removeItem("token");
  }
};

export const getAuthToken = () => {
  return localStorage.getItem("token");
};

export const logout = () => {
  // Remove cookies
  Cookies.remove("token");
  Cookies.remove("refreshToken");

  // Remove user from localStorage
  localStorage.removeItem("user");

  // Redirect to signin page with a full page reload
  window.location.href = "/signin";
};

// Utility function to create a new user (for admin purposes)
export const createUser = async (
  username: string,
  email: string,
  password: string,
  role: string = "user"
): Promise<User> => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const { data: user, error } = await supabase
      .from("users")
      .insert([
        {
          username,
          email,
          password_hash: hashedPassword,
          role,
          is_active: true,
        },
      ])
      .select()
      .single();

    if (error) {
      throw new Error("Failed to create user");
    }

    return {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      is_active: user.is_active,
      last_login: user.last_login,
    };
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user");
  }
};
