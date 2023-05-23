import { useNavigate } from "react-router-dom";
import { message } from "antd";

export const useLogout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
    message.info("Logout successful");
  };

  return { handleLogout };
};
