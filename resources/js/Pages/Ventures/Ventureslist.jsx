import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Card, Table, Typography, Button, Col, Row, Space } from "antd";

//icons
import {
    EditOutlined,
    DeleteOutlined,
    PlusCircleOutlined,
} from "@ant-design/icons";
//table columns
const columns = [
    {
        title: "CODE",
        dataIndex: "code",
        key: "id",
    },
    {
        title: "Title",
        dataIndex: "title",
        key: "key",
    },
    {
        title: "URL",
        dataIndex: "url",
        key: "key",
    },
    {
        title: "Location",
        dataIndex: "location",
        key: "key",
    },

    {
        title: "Address",
        dataIndex: "address",
        key: "key",
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "key",
    },
    {
        title: "Active",
        dataIndex: "active",
        key: "key",
    },

    {
        title: "Created On",
        dataIndex: "created",
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
                    id={record.id}
                    // onClick={editRecord}
                    icon={<EditOutlined />}
                />
                <Button
                    style={{ margin: "5px" }}
                    shape="circle"
                    id={record.id}
                    icon={<DeleteOutlined />}
                    // onClick={destroyRecord}
                    danger
                />
            </Space>
        ),
    },
];

const data = [
    {
        id: "1",
        code: "code",
        url: "demo.com",
        email: "demo@demo.com",
    },
];

function Ventureslist(props) {
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Welcome to Ventures Page`}>
                <Typography.Text>
                    <div className="top-container">
                        <h3>Ventures List</h3>
                        <Link
                            href={window.route("ventures.create")}
                            type="button"
                        >
                            <Button
                                type="primary"
                                icon={<PlusCircleOutlined />}
                            >
                                New Venture
                            </Button>
                        </Link>
                    </div>
                    <Table columns={columns} dataSource={data} size="small" />
                </Typography.Text>
            </Card>
        </>
    );
}

Ventureslist.layout = (page) => <AuthenticatedLayout children={page} />;

export default Ventureslist;
