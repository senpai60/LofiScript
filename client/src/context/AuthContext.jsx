import { createContext, useContext, useEffect, useState } from "react";
import { authApi } from "../api/authApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);

  // ---------------------------------
  // Load user if valid cookie exists
  // ---------------------------------
  const fetchUser = async () => {
    try {
      const res = await authApi.get("/me");
      setUser(res.data.user);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // ---------------------------------
  // Register
  // ---------------------------------
  const register = async (formData) => {
    const res = await authApi.post("/register", formData);
    setUser(res.data.user);
    return res.data;
  };

  // ---------------------------------
  // Login
  // ---------------------------------
  const login = async (formData) => {
    const res = await authApi.post("/login", formData);
    setUser(res.data.user);
    return res.data;
  };

  // ---------------------------------
  // Logout
  // ---------------------------------
  const logout = async () => {
    await authApi.post("/logout");
    setUser(null);
  };

  const value = {
    user,
    loading,
    register,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
