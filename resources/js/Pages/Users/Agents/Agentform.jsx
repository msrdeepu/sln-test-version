import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Form, Col, Row, Input, DatePicker, Card, Button } from "antd"
const { TextArea } = Input;

function Agentform(props) {
    return (
        <>
            <Head title="Agent Form" />

            <Card title={`Agent Form`}>
                <Typography.Text></Typography.Text>
            </Card>
        </>
    );
}

Agentform.layout = (page) => <AuthenticatedLayout children={page} />;

export default Agentform;