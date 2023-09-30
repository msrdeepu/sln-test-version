import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, Typography } from "antd";

function Createagent(props) {
    return (
        <>
            <Head title="Agents" />

            <Card title={`Create Agents`}>
                <Typography.Text>Create Agent Here</Typography.Text>
            </Card>
        </>
    );
}

Createagent.layout = (page) => <AuthenticatedLayout children={page} />;

export default Createagent;
