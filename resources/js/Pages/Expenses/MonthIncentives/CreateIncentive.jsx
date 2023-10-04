import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, Typography } from "antd";
import IncentiveForm from "./IncentiveForm";

function CreateIncentive(props) {
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Welcome, ${props.auth.user.name}`}>
                <IncentiveForm />
            </Card>
        </>
    );
}

CreateIncentive.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreateIncentive;
