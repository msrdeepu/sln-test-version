import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, router } from "@inertiajs/react";
import {
    Card,
    Input,
} from "antd";
//form
import Propertyform from "./Propertyform";

//custom css file
import "./property.css";
const { TextArea } = Input;
//rich text editor

function CreateProperty({ props, record }) {

    const { data, setData, post, patch, processing, errors, reset } = useForm({
        code: record.code,
        venture: record.venture,
        plotnum: record.plotnum,
        title: record.title,
        location: record.location,
        villagearea: record.villagearea,
        surveynum: record.surveynum,
        plotfacing: record.plotfacing,
        northbound: record.northbound,
        southbound: record.southbound,
        eastbound: record.eastbound,
        westbound: record.westbound,
        roadsize: record.roadsize,
        customer: record.customer,
        dispname: record.dispname,
        selectagent: record.selectagent,
        agentcode: record.agentcode,
        length: record.length,
        width: record.width,
        dimensions: record.dimensions,
        tsqfeets: record.tsqfeets,
        tsqyards: record.tsqyards,
        tankanams: record.tankanams,
        ankanamcost: record.ankanamcost,
        plotprice: record.plotprice,
        discount: record.discount,
        totalcost: record.totalcost,
        dobooking: record.dobooking,
        status: record.status,
        eachinstallment: record.eachinstallment,
        totalinstallamount: record.totalinstallamount,
        approvauthority: record.approvauthority,
        address: record.address,
        stremarks: record.stremarks
    })

    const sumbmitHandler = (values) => {
        console.log(data);
        post("/admin/properties/store", data);
    }

    //udate form
    const updateHandler = (values) => {
        patch(`/admin/properties/${record.id}`, data)
    }



    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Property Details`}>
                <Propertyform
                    submitForm={record.code == undefined ? sumbmitHandler : updateHandler}
                    data={data}
                    setData={setData}
                    savebutton={record.code == undefined ? "Add" : "Save"}
                />
            </Card>
        </>
    );
}

CreateProperty.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreateProperty;
