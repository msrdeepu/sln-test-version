import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, Typography } from "antd";

import CashForm from "./CashForm";

function CreateCashAdvance(props) {
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Cash Advance`}>
                <CashForm />
            </Card>
        </>
    );
}

CreateCashAdvance.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreateCashAdvance;
