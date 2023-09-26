import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, router } from "@inertiajs/react";
import { Card, Form, Input, Radio, Row, Col, Select, Button } from "antd";
import BranchForm from "./BranchForm";

const { TextArea } = Input;

function Createbranch({ props, record }) {
    //useFormHook
    const { data, setData, post, patch, processing, errors, reset } = useForm({
        code: record.code,
        company: record.company || "-- Select--",
        status: record.status,
        location: record.location,
        email: record.email,
        phonenumber: record.phonenumber,
        mobilenumber: record.mobilenumber,
        address: record.address,
    });


    const submitForm = (values) => {
        console.log(data);
        router.post("/admin/branches/store", data);
    };


    return (
        <>
            {console.log(record)}
            <Head title="Dashboard" />

            <Card title={`Branch Details`}>
                <BranchForm
                    submitForm={submitForm}
                    setData={setData}
                    data={data}
                    saveButton={record.name == undefined ? "Add" : "Save"}
                />
            </Card>
        </>
    );
}

Createbranch.layout = (page) => <AuthenticatedLayout children={page} />;

export default Createbranch;