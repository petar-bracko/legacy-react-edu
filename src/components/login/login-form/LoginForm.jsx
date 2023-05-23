import { Form, Input, Button, Checkbox, Card } from "antd";
import "./LoginForm.css";

export const LoginForm = ({
  handleInputChange,
  handleCheckboxChange,
  handleFormClear,
  handleSubmit,
  formValues,
  handleKeyPress,
}) => (
  <Card className="login-form-card">
    <Form labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} autoComplete="off">
      <Form.Item label="Username">
        <Input
          value={formValues.username}
          onChange={handleInputChange}
          name="username"
          onKeyDown={handleKeyPress}
        />
      </Form.Item>
      <Form.Item label="Password">
        <Input.Password
          value={formValues.password}
          onChange={handleInputChange}
          name="password"
          onKeyDown={handleKeyPress}
        />
      </Form.Item>
      <Form.Item>
        <Checkbox
          checked={formValues.remember}
          onChange={handleCheckboxChange}
          name="remember"
        >
          Remember me
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button
          style={{ marginRight: "1rem" }}
          type="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Button type="default" onClick={handleFormClear}>
          Clear
        </Button>
      </Form.Item>
    </Form>
  </Card>
);
