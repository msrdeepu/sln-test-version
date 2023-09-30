import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Card, Typography, Button, Table } from "antd";

import { PlusCircleOutlined } from "@ant-design/icons"

//dummy data source
const dataSource = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
];

//columns
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
];

function Agents(props) {
    return (
        <>
            <Head title="Agents Page" />

            <Card title={`Welcome, ${props.auth.user.name}`}>

                <div className="top-container">
                    <h3>Organizse Agents</h3>
                    <Link
                        href={window.route("agents.create")}
                        type="button"
                    >
                        <Button
                            type="primary"
                            icon={<PlusCircleOutlined />}
                        >
                            New Agent
                        </Button>
                    </Link>
                </div>
                <div style={{ marginTop: "15px" }}>
                    <Table dataSource={dataSource} columns={columns} />
                </div>

            </Card>
        </>
    );
}

Agents.layout = (page) => <AuthenticatedLayout children={page} />;

export default Agents;
