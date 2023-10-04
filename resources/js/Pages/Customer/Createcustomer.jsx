import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, Typography } from "antd";
import Customerform from "./Customerform";

function Createcustomer(props) {
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Customer Full Details`}>
                <Customerform />
            </Card>
        </>
    );
}

Createcustomer.layout = (page) => <AuthenticatedLayout children={page} />;

export default Createcustomer;
