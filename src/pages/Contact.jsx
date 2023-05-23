import { useContactForm, useForm, useModal } from "hooks";
import { ContactForm, ContactTable } from "components";
import { validateContactForm } from "helpers";
import { Modal } from "antd";

export const Contact = () => {
  const { contactFormData, handleFormEntryDelete, setContactFormData } =
    useContactForm();

  const { isModalVisible, handleCancel, setIsModalVisible } = useModal();

  const {
    formValues,
    setFormValues,
    handleInputChange,
    handleFormClear,
    handleSelectChange,
  } = useForm();

  const showModal = (e) => {
    setIsModalVisible(e.currentTarget.id);
    const findFormFromContext = contactFormData.find(
      (element) => element.id === e.currentTarget.id
    );
    setFormValues(findFormFromContext);
  };

  const handleSubmit = () => {
    const isValid = validateContactForm(formValues);
    if (isValid) {
      setContactFormData([
        ...contactFormData.map((element) =>
          element.id === formValues.id ? formValues : element
        ),
      ]);
      handleFormClear();
      handleCancel();
    }
  };

  return (
    <>
      <ContactTable
        dataSource={contactFormData}
        handleFormEntryDelete={handleFormEntryDelete}
        showModal={showModal}
      />
      <Modal
        width={1000}
        visible={isModalVisible}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        <ContactForm
          values={formValues}
          handleInputChange={handleInputChange}
          handleFormClear={handleFormClear}
          handleSelectChange={handleSelectChange}
          update
        />
      </Modal>
    </>
  );
};
