import { Row } from "antd";

export const Center = ({ children }) => (
  <Row
    type="flex"
    justify="center"
    align="middle"
    style={{ minHeight: "100vh" }}
  >
    {children}
  </Row>
);
