import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, Typography } from "antd";
import ReceiptsForm from "./Receiptform";

function Createreceipt(props) {
    return (
        <>
            <Head title="Creae-receipt" />

            <Card title={`Welcome, ${props.auth.user.name}`}>
                <ReceiptsForm />
            </Card>
        </>
    );
}

Createreceipt.layout = (page) => <AuthenticatedLayout children={page} />;

export default Createreceipt;
