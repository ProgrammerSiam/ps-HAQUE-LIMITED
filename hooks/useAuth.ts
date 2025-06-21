import { useState, useEffect } from "react";
import {
  verifyToken,
  User,
  logout as logoutService,
} from "../lib/services/auth";
import Cookies from "js-cookie";

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const token = Cookies.get("token");

      if (token) {
        try {
          const userData = await verifyToken(token);
          setUser(userData);
        } catch (error) {
          console.error("Token verification failed", error);
          setUser(null);
        }
      }
      setLoading(false);
    };

    checkUser();
  }, []);

  const logout = () => {
    logoutService();
    setUser(null);
  };

  return { user, loading, logout };
};

export default useAuth;
