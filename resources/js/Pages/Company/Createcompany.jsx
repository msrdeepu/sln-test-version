import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, router } from "@inertiajs/react";
import CompanyForm from "./CompanyForm";
import {
    Card,
    Input,
} from "antd";

function Createcompany({ props, record }) {

    //useForm
    const { data, setData, post, patch, processing, errors, reset } = useForm({
        companyname: record.companyname,
        domain: record.domain,
        gstax: record.gstax,
        pan: record.pan,
        upiId: record.upiid,
        email: record.email,
        phonenum: record.phonenum,
        mobilenum: record.mobilenum,
        websiteslug: record.websiteslug,
        logo: record.logo,
        qrcode: record.qrcode,
        astatus: record.astatus,
        address: record.address,
        bankdetails: record.bankdetails,
        terms: record.terms,
        note: record.note,
        footer: record.footer
    })

    function submitHandler(values) {
        console.log(data)
        post("/admin/company/store", data);

    }

    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Company Details`}>
                <CompanyForm submitForm={submitHandler} data={data} setData={setData} saveButton={"Save"} />
            </Card>
        </>
    );
}

Createcompany.layout = (page) => <AuthenticatedLayout children={page} />;

export default Createcompany;
