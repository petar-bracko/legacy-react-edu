import { Button, Table, Space } from "antd";

export const ContactTable = ({
  dataSource,
  handleFormEntryDelete,
  showModal,
}) => {
  const columns = [
    { title: "First name", dataIndex: "firstName", key: "firstName" },
    { title: "Last name", dataIndex: "lastName", key: "lastName" },
    { title: "Date of birth", dataIndex: "dob", key: "dob" },
    { title: "Contact type", dataIndex: "contactType", key: "contactType" },
    { title: "Contact", dataIndex: "contact", key: "contact" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button id={record.id} onClick={showModal}>
            Update
          </Button>
          <Button id={record.id} onClick={handleFormEntryDelete}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return <Table dataSource={dataSource} columns={columns} />;
};
