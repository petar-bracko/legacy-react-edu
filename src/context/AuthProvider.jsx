import { useState, createContext } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ isAuthenticated: false });

  if (!userData.isAuthenticated && localStorage.getItem("isAuthenticated")) {
    setUserData({ isAuthenticated: true });
  }

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
