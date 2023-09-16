import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Card, Table, Typography, Button, Col, Row, Space } from "antd";
import {
    EditOutlined,
    DeleteOutlined,
    PlusCircleOutlined,
} from "@ant-design/icons";

//table columns
const columns = [
    {
        title: "#",
        dataIndex: "",
        key: "id",
    },
    {
        title: "Code",
        dataIndex: "code",
        key: "key",
    },
    {
        title: "Plot",
        dataIndex: "plot",
        key: "key",
    },
    {
        title: "Venture",
        dataIndex: "venture",
        key: "key",
    },

    {
        title: "Location",
        dataIndex: "location",
        key: "key",
    },
    {
        title: "Status",
        dataIndex: "status",
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
        plot: "demo",
        email: "demo@demo.com",
    },
];

function Propertylist(props) {
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Welcome to Properties Page`}>
                <Typography.Text>
                    <div className="top-container">
                        <h3>Properties List</h3>
                        <Link
                            href={window.route("properties.create")}
                            type="button"
                        >
                            <Button
                                type="primary"
                                icon={<PlusCircleOutlined />}
                            >
                                New Property
                            </Button>
                        </Link>
                    </div>
                    <Table columns={columns} dataSource={data} size="small" />
                </Typography.Text>
            </Card>
        </>
    );
}

Propertylist.layout = (page) => <AuthenticatedLayout children={page} />;

export default Propertylist;
