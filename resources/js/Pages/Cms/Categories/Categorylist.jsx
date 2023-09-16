import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { Head, Link, router } from "@inertiajs/react";
import { Card, Table, Button, Space } from "antd";

//icons
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

//category form import
import CategoryForm from "../../Forms/CategoryForm";

function Categorylist({ resource }) {
    //delete Action
    function destroyRecord(e) {
        if (confirm("Are you sure you want to delete this record ?")) {
            router.delete(route("category.destroy", e.currentTarget.id));
        }
    }

    //Loading Edit View
    function editRecord(e) {
        router.get(route("category.edit", e.currentTarget.id));
    }

    //Table Columns
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Category Name",
            dataIndex: "cname",
            key: "key",
        },
        {
            title: "Slug/URL",
            dataIndex: "slug",
            key: "key",
        },
        {
            title: "Parent Category",
            dataIndex: "parent",
            key: "key",
        },

        {
            title: "Order",
            dataIndex: "dorder",
            key: "key",
        },
        {
            title: "Page Layout",
            dataIndex: "layout",
            key: "key",
        },

        {
            title: "SEO Title",
            dataIndex: "seotitle",
            key: "key",
        },
        {
            title: "Actions",
            dataIndex: "actions",
            render: (_, record) => (
                <Space size="small">
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

    return (
        <div>
            <Head title={`Category List`} />

            <Card title={`Category List`}>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Link href={window.route("category.create")} type="button">
                        <Button type="primary">Add Category</Button>
                    </Link>
                </div>

                <Table columns={columns} dataSource={resource} size="small" />
            </Card>
        </div>
    );
}

Categorylist.layout = (page) => <AuthenticatedLayout children={page} />;

export default Categorylist;
