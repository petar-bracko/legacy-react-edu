import { Navigate } from "react-router-dom";
import { Layout } from "hoc";
import { useAuth } from "hooks";

export const RequireAuth = ({ children }) => {
  const { userData } = useAuth();

  if (!userData.isAuthenticated) return <Navigate to="/login" />;

  return <Layout>{children}</Layout>;
};
