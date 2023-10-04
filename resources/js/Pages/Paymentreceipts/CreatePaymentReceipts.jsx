import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, Typography } from "antd";

import Payform from "./Payform";

function CreatePaymentReceipts(props) {
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Welcome, CreatePaymentReceipts`}>
                <Payform />
            </Card>
        </>
    );
}

CreatePaymentReceipts.layout = (page) => (
    <AuthenticatedLayout children={page} />
);

export default CreatePaymentReceipts;
