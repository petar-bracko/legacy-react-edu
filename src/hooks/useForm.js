import { useState } from "react";

export const useForm = (initialState) => {
  const [formValues, setFormValues] = useState({ ...initialState });

  const handleInputChange = ({ target: { name, value } }) =>
    setFormValues({ ...formValues, [name]: value });

  const handleCheckboxChange = ({ target: { checked, name } }) =>
    setFormValues({ ...formValues, [name]: checked });

  const handleFormClear = () => setFormValues({ ...initialState });

  const handleSelectChange = (name) => (value) =>
    setFormValues({ ...formValues, [name]: value });

  return {
    formValues,
    setFormValues,
    handleInputChange,
    handleCheckboxChange,
    handleFormClear,
    handleSelectChange,
  };
};
