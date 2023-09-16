import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { Head, Link, useForm, router } from "@inertiajs/react";
import { Card, Table, Space, Button } from "antd";

//category form import
import CategoryForm from "../../Forms/CategoryForm";

function Categoryview({ props, sstatus, slayout, sparent, record, images }) {
    //   console.log(record);
    //console.log(record.thumbPath);
    //const form=Form.useForm;
    //Assigning Record
    const { data, setData, post, patch, processing, errors, reset } = useForm();
    //console.log(sstatus);

    //Add Form Submission
    const submitForm = (values) => {
        // console.log(values);
        post("/category/store", data, { forceFormData: true });
    };

    //Update From Submission
    const updateForm = (values) => {
        //console.log(data);
        post(`/category/${record.id}`, data, { forceFormData: true });
    };

    let buttonTxt;
    let baseForm;
    let baseTitle;
    if (record.cname == undefined) {
        buttonTxt = "Add";
        baseTitle = "Add Category";
        baseForm = (
            <CategoryForm
                sstatus={sstatus}
                slayout={slayout}
                sparent={sparent}
                submitForm={submitForm}
                setData={setData}
                data={data}
                savebutton={buttonTxt}
            />
        );
    } else {
        buttonTxt = "Save";
        baseTitle = "Edit Category";
        baseForm = (
            <CategoryForm
                sstatus={sstatus}
                slayout={slayout}
                sparent={sparent}
                submitForm={updateForm}
                setData={setData}
                data={record}
                savebutton={buttonTxt}
            />
        );
    }

    return (
        <div>
            <Head title={baseTitle} />

            <Card title={baseTitle}>{baseForm}</Card>
        </div>
    );
}

Categoryview.layout = (page) => <AuthenticatedLayout children={page} />;

export default Categoryview;
