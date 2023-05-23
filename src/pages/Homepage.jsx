import { ContactForm } from "components";
import { initialStateContactForm } from "constants";
import { useForm, useContactForm } from "hooks";
import { validateContactForm } from "helpers";
import { v4 as uuidv4 } from "uuid";
import { message } from "antd";

export const Homepage = () => {
  const { formValues, handleInputChange, handleFormClear, handleSelectChange } =
    useForm(initialStateContactForm);

  const { contactFormData, setContactFormData } = useContactForm();

  const handleSubmit = () => {
    const isValid = validateContactForm(formValues);
    if (isValid) {
      const formValuesCopy = { ...formValues };
      formValuesCopy.id = uuidv4();
      setContactFormData([...contactFormData, formValuesCopy]);
      message.success("Your form has been submitted successfully!");
      handleFormClear();
    }
  };

  return (
    <ContactForm
      values={formValues}
      handleInputChange={handleInputChange}
      handleFormClear={handleFormClear}
      handleSubmit={handleSubmit}
      handleSelectChange={handleSelectChange}
    />
  );
};
