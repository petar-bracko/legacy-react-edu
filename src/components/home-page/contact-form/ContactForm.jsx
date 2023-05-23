import { Button, Col, Form, Input, Row, Select, Space } from "antd";

export const ContactForm = ({
  values,
  handleInputChange,
  handleFormClear,
  handleSubmit,
  handleSelectChange,
  update,
}) => (
  <Form labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
    <Form.Item label="First name">
      <Input
        name="firstName"
        value={values.firstName}
        onChange={handleInputChange}
      />
    </Form.Item>
    <Form.Item label="Last name">
      <Input
        name="lastName"
        value={values.lastName}
        onChange={handleInputChange}
      />
    </Form.Item>
    <Form.Item label="Date of birth">
      <Input name="dob" value={values.dob} onChange={handleInputChange} />
    </Form.Item>
    <Form.Item label="Contact type">
      <Select
        allowClear
        value={values.contactType}
        onChange={handleSelectChange("contactType")}
        options={[
          { label: "Email", value: "email" },
          { label: "Phone", value: "phone" },
        ]}
      />
    </Form.Item>
    <Form.Item label="Contact">
      <Input
        name="contact"
        value={values.contact}
        onChange={handleInputChange}
      />
    </Form.Item>
    <Row>
      <Col offset={8} span={8}>
        <Form.Item label="">
          <Space>
            {update ? null : (
              <Button type="primary" onClick={handleSubmit}>
                Submit
              </Button>
            )}
            <Button onClick={handleFormClear}>Clear</Button>
          </Space>
        </Form.Item>
      </Col>
    </Row>
  </Form>
);
