import { useContext } from "react";
import { AuthContext } from "context/AuthProvider";

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "AuthContextException: useAuth must be used within AuthProvider."
    );
  }

  return context;
};
