"use client";
import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const AuthProvider = ({ children }) => {
  const initialAuthState = JSON.parse(localStorage.getItem("auth")) || {
    isAuthenticated: false,
    user: null,
  };
  const [auth, setAuth] = useState(initialAuthState);

  useEffect(() => {
    // Save auth state to localStorage whenever it changes
    localStorage.setItem("auth", JSON.stringify(auth));
    console.log("AuthProvider state:", auth);
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
