import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Card, Table, Typography, Button, Col, Row, Space } from "antd";
//icons
import {
    EditOutlined,
    DeleteOutlined,
    PlusCircleOutlined,
} from "@ant-design/icons";

import "./list.css";

import "../../../css/app.css";

//table columns
const columns = [
    {
        title: "Logo",
        dataIndex: "logo",
        key: "id",
    },
    {
        title: "Domain",
        dataIndex: "domain",
        key: "key",
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "key",
    },
    {
        title: "Phone",
        dataIndex: "phone",
        key: "key",
    },

    {
        title: "Mobile",
        dataIndex: "mobile",
        key: "key",
    },
    {
        title: "GST",
        dataIndex: "gst",
        key: "key",
    },
    {
        title: "PAN",
        dataIndex: "pan",
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
        logo: "logo",
        pan: "demo",
        gst: "demo",
        email: "demo@demo.com",
    },
];

function Companylist(props) {
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Welcome to Companies Page`}>
                <Typography.Text>
                    <div className="top-container">
                        <h3>Companies List</h3>
                        <Link
                            href={window.route("company.create")}
                            type="button"
                        >
                            <Button
                                type="primary"
                                icon={<PlusCircleOutlined />}
                            >
                                New Company
                            </Button>
                        </Link>
                    </div>
                    <Table columns={columns} dataSource={data} size="small" />
                </Typography.Text>
            </Card>
        </>
    );
}

Companylist.layout = (page) => <AuthenticatedLayout children={page} />;

export default Companylist;
