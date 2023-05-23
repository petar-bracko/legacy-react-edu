import { useState, createContext } from "react";

export const ContactFormContext = createContext(null);

const ContactFormProvider = ({ children }) => {
  const [contactFormData, setContactFormData] = useState([
    {
      id: "1",
      firstName: "Petar",
      lastName: "Bracko",
      dob: "18.02.1996.",
      contactType: "email",
      contact: "petar.bracko@gmail.com",
    },
  ]);

  const handleFormEntryDelete = ({ currentTarget }) => {
    const filteredContactFormData = contactFormData.filter(
      (entry) => entry.id !== currentTarget.id
    );
    setContactFormData(filteredContactFormData);
  };

  return (
    <ContactFormContext.Provider
      value={{ contactFormData, setContactFormData, handleFormEntryDelete }}
    >
      {children}
    </ContactFormContext.Provider>
  );
};

export default ContactFormProvider;
