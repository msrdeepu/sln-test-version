import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Card, Table, Typography, Button, Col, Row, Space } from "antd";

//destroy record
const destroyRecord = (e) => {
    if (confirm("Are you sure you want to delete this record ?")) {
        router.delete(route("ventures.destroy", e.currentTarget.id));
    }
}

//icons
import {
    EditOutlined,
    DeleteOutlined,
    PlusCircleOutlined,
} from "@ant-design/icons";


const data = [
    {
        id: "1",
        code: "code",
        url: "demo.com",
        email: "demo@demo.com",
    },
];

function Ventureslist({ props, ventruesList }) {

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
            dataIndex: "slug",
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
            dataIndex: "sstatus",
            key: "key",
        },
        {
            title: "Active",
            dataIndex: "published",
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
                        id={record.id}
                        // onClick={editRecord}
                        icon={<EditOutlined />}
                    />
                    <Button
                        style={{ margin: "5px" }}
                        shape="circle"
                        id={record.id}
                        icon={<DeleteOutlined />}
                        onClick={destroyRecord}
                        danger
                    />
                </Space>
            ),
        },
    ];
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
                    <Table columns={columns} dataSource={ventruesList} size="small" />
                </Typography.Text>
            </Card>
        </>
    );
}

Ventureslist.layout = (page) => <AuthenticatedLayout children={page} />;

export default Ventureslist;
