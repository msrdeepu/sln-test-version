import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Card, Table, Typography, Button, Col, Row, Space } from "antd";

//icons
import {
    EditOutlined,
    DeleteOutlined,
    PlusCircleOutlined,
} from "@ant-design/icons";

//dummy data source
const dataSource = [
    {
        key: "1",
        name: "Mike",
        age: 32,
        address: "10 Downing Street",
    },
    {
        key: "2",
        name: "John",
        age: 42,
        address: "10 Downing Street",
    },
];

//table columns
const columns = [
    {
        title: "CODE",
        dataIndex: "code",
        key: "key",
    },
    {
        title: "Location",
        dataIndex: "location",
        key: "key",
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "key",
    },
    {
        title: "Phone",
        dataIndex: "phonenumber",
        key: "key",
    },

    {
        title: "Mobile",
        dataIndex: "mobilenumber",
        key: "key",
    },
    {
        title: "Active",
        dataIndex: "status",
        key: "key",
    },

    {
        title: "Created On",
        dataIndex: "created_at",
        key: "key",
    },
    {
        title: "Actions",
        dataIndex: "actions",
        render: (_, record) => (
            <Space size="small">
                <Button
                    style={{ margin: "5px" }}
                    shape="circle"
                    //id={record.id}
                    //onClick={editRecord}
                    icon={<EditOutlined />}
                />
                <Button
                    style={{ margin: "5px" }}
                    shape="circle"
                    //id={record.id}
                    icon={<DeleteOutlined />}
                    //onClick={destroyRecord}
                    danger
                />
            </Space>
        ),
    },
];
function Agentlist(props) {
    return (
        <>
            <Head title="agents" />

            <Card title={`Welcome to Agents Page`}>
                <Typography.Text>
                    <div className="top-container">
                        <h3>Agents List</h3>
                        <Link
                            href={window.route("agents.create")}
                            type="button"
                        >
                            <Button
                                type="primary"
                                icon={<PlusCircleOutlined />}
                            >
                                Create Agent
                            </Button>
                        </Link>
                    </div>
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                        size="small"
                    />
                </Typography.Text>
            </Card>
        </>
    );
}

Agentlist.layout = (page) => <AuthenticatedLayout children={page} />;

export default Agentlist;
