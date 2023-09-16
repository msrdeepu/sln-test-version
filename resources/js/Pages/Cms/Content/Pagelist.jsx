import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Card, Table, Button, Space } from "antd";

//icons
import {
    EditOutlined,
    DeleteOutlined,
    FileAddOutlined,
} from "@ant-design/icons";

//delete Action
function destroyRecord(e) {
    if (confirm("Are you sure you want to delete this record ?")) {
        router.delete(route("page.destroy", e.currentTarget.id));
    }
}

//Loading Edit View
function editRecord(e) {
    router.get(route("page.edit", e.currentTarget.id));
}

function bulkRecord(e) {
    router.get(route("content.create", e.currentTarget.id));
}

//Table Columns
const columns = [
    {
        title: "ID",
        dataIndex: "id",
        key: "id",
    },
    {
        title: "Title",
        dataIndex: "title",
        key: "key",
    },
    {
        title: "Type",
        dataIndex: "pagetype",
        key: "key",
    },
    {
        title: "URL / Slug",
        dataIndex: "slug",
        key: "key",
    },

    {
        title: "Published",
        dataIndex: "published",
        key: "key",
    },
    {
        title: "Created On",
        dataIndex: "createdate",
        key: "key",
    },
    {
        title: "Actions",
        dataIndex: "actions",
        render: (_, record) => (
            <Space size="small">
                {record.hasattachments == "YES" && (
                    <Button
                        shape="circle"
                        id={record.id}
                        onClick={bulkRecord}
                        icon={<FileAddOutlined />}
                    />
                )}
                <Button
                    shape="circle"
                    id={record.id}
                    onClick={editRecord}
                    icon={<EditOutlined />}
                />
                <Button
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

const Pagelist = ({ resource }) => {
    return (
        <div>
            <Head title={`Pages List`} />

            <Card title={`Pages List`}>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Link href={window.route("page.create")} type="button">
                        <Button type="primary">Add Page</Button>
                    </Link>
                </div>

                <Table columns={columns} size="small" dataSource={resource} />
            </Card>
        </div>
    );
};

Pagelist.layout = (page) => <AuthenticatedLayout children={page} />;

export default Pagelist;
