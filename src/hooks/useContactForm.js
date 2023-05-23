import { useContext } from "react";
import { ContactFormContext } from "context/ContactFormProvider";

export const useContactForm = () => {
  const context = useContext(ContactFormContext);

  if (!context) {
    throw new Error(
      "ContactFormContextException: useContactForm must be used within ContactFormProvider."
    );
  }

  return context;
};
