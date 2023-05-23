import { Link } from "react-router-dom";
import { useLogout } from "hooks";
import { Layout as AntdLayout, Menu } from "antd";

const { Header, Content, Footer } = AntdLayout;

export const Layout = ({ children }) => {
  const { handleLogout } = useLogout();

  return (
    <AntdLayout>
      <Header className="layout-header">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/home">Contact form</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/contact-table">Contact table</Link>
          </Menu.Item>
          <Menu.Item className="logout-btn" key="3" onClick={handleLogout}>
            <button>Logout</button>
          </Menu.Item>
        </Menu>
      </Header>
      <Content className="layout-content">
        <div className="layout-content-children-wrapper">{children}</div>
      </Content>
      <Footer className="layout-footer">FINA &copy;2023.</Footer>
    </AntdLayout>
  );
};
