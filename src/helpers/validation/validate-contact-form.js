import { validateEmail } from "./validate-email";
import { message } from "antd";

export const validateContactForm = ({
  firstName,
  lastName,
  dob,
  contactType,
  contact,
}) => {
  if (contactType === "email" && !validateEmail(contact)) {
    message.info("Email address is incorrect");
    return false;
  }

  if (firstName && lastName && dob && contactType && contact) return true;

  message.info("Please fill out all required fields");
  return false;
};
