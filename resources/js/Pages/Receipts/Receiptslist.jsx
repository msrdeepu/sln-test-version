import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Card, Table, Typography, Button } from "antd";
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

function Receiptslist(props) {
    return (
        <>
            <Head title="Receipts" />

            <Card title={`Welcome to Receipts Page`}>
                <Typography.Text>
                    <div className="top-container">
                        <h3>Receipts List</h3>
                        <Link
                            href={window.route("receipts.create")}
                            type="button"
                        >
                            <Button
                                type="primary"
                                icon={<PlusCircleOutlined />}
                            >
                                New Receipt
                            </Button>
                        </Link>
                    </div>
                    <Table columns={columns} dataSource={""} size="small" />
                </Typography.Text>
            </Card>
        </>
    );
}

Receiptslist.layout = (page) => <AuthenticatedLayout children={page} />;

export default Receiptslist;
