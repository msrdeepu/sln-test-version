import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, Typography, Tabs, Form } from "antd";


//tabs
import Bankdetails from "./FormTabs/Bankdetails";
import Education from "./FormTabs/Education";
import General from "./FormTabs/General";
import Location from "./FormTabs/Location";
import Nominee from "./FormTabs/Nominee";

const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: '1',
        label: 'General Details',
        children: (<General />),
    },
    {
        key: '2',
        label: ' Chain & Education',
        children: (<Education />),
    },
    {
        key: '3',
        label: 'Location',
        children: (<Location />),
    },
    {
        key: '4',
        label: 'Joining & Bank Details',
        children: (<Bankdetails />),
    },

    {
        key: '5',
        label: 'Nominee',
        children: (<Nominee />),
    },
];

function Createagent(props) {
    return (
        <>
            <Head title="Agents" />

            <Card title={`Create Agent`}>
                <Form layout="vertical">
                    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                </Form>
            </Card>
        </>
    );
}

Createagent.layout = (page) => <AuthenticatedLayout children={page} />;

export default Createagent;
