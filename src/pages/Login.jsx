import { useEffect } from "react";
import { useNavigate } from "react-router";
import { LoginForm, Center } from "components";
import { validateLoginForm } from "helpers/validation/validate-login-form";
import { useAuth, useForm } from "hooks";
import { initialStateLoginForm } from "constants";

export const Login = () => {
  const { setUserData } = useAuth();

  const {
    formValues,
    setFormValues,
    handleInputChange,
    handleCheckboxChange,
    handleFormClear,
  } = useForm(initialStateLoginForm);

  useEffect(() => {
    const userInfo = localStorage.getItem("user-info");
    if (userInfo) setFormValues(JSON.parse(userInfo));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();

  const handleSubmit = () => {
    const isFormValid = validateLoginForm(formValues);
    if (isFormValid) {
      setUserData({ ...formValues, isAuthenticated: true });
      if (formValues.remember) {
        localStorage.setItem("user-info", JSON.stringify(formValues));
      } else {
        if (localStorage.getItem("user-info")) {
          localStorage.removeItem("user-info");
        }
      }
      localStorage.setItem("isAuthenticated", true);
      navigate("/home", { replace: true });
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") handleSubmit();
  };

  return (
    <Center>
      <LoginForm
        handleInputChange={handleInputChange}
        handleCheckboxChange={handleCheckboxChange}
        handleFormClear={handleFormClear}
        handleSubmit={handleSubmit}
        formValues={formValues}
        handleKeyPress={handleKeyPress}
      />
    </Center>
  );
};
