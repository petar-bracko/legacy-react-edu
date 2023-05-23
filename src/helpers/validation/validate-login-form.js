import { message } from "antd";

export const validateLoginForm = ({ username, password }) => {
  if (!username || !password) {
    message.info("Please enter your username and password");
    return false;
  }

  if (username !== "pbracko" || password !== "lozinka123") {
    message.warning("The username or password is incorrect");
    return false;
  }

  return true;
};
