import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Card, Table, Typography, Button, Space } from "antd";
import {
    EditOutlined,
    DeleteOutlined,
    PlusCircleOutlined,
} from "@ant-design/icons";

//delete Action
function destroyRecord(e) {
    if (confirm("Are you sure you want to delete this record ?")) {
        router.delete(route("properties.destroy", e.currentTarget.id));
    }
}

//Loading Edit View
function editRecord(e) {
    router.get(route("properties.edit", e.currentTarget.id));
}


function Propertylist({ props, resource }) {

    //table columns
    const columns = [
        {
            title: "#",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Code",
            dataIndex: "code",
            key: "key",
        },
        {
            title: "Plot",
            dataIndex: "plotnum",
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
                        onClick={editRecord}
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
                    <Table columns={columns} dataSource={resource} size="small" />
                </Typography.Text>
            </Card>
        </>
    );
}

Propertylist.layout = (page) => <AuthenticatedLayout children={page} />;

export default Propertylist;
