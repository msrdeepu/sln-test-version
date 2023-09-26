import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, router } from "@inertiajs/react";
import { Card, Table, Space, Button } from "antd";

import SettingsForm from "../Forms/SettingsForm";

//delete Action
function destroyRecord(e) {
    if (confirm("Are you sure you want to delete this record ?")) {
        router.delete(route("setting.destroy", e.currentTarget.id));
    }
}

//Loading Edit View
function editRecord(e) {
    router.get(route("setting.edit", e.currentTarget.id));
}

const Settingsview = ({ props, settingsList, stype, sstatus, record }) => {

    console.log(record);
    const { data, setData, post, patch, processing, errors, reset } = useForm({
        type: record.type || "-- Select--",
        name: record.name,
        code: record.code,
        dorder: record.dorder,
        value: record.value,
        status: record.status || "-- Select--",
    });

    //Add Form Submission
    const submitForm = (values) => {
        post("/setting/store", data);
    };

    //Update From Submission
    const updateForm = (values) => {
        // console.log(values);
        patch(`/setting/${record.id}`, data);
    };

    //Table Columns
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Value",
            dataIndex: "value",
        },
        {
            title: "Type",
            dataIndex: "type",
        },

        {
            title: "Disp Order",
            dataIndex: "dorder",
        },
        {
            title: "Status",
            dataIndex: "status",
        },

        {
            title: "Parent Code",
            dataIndex: "code",
        },
        {
            title: "Actions",
            dataIndex: "actions",
            render: (_, record) => (
                <Space size="middle">
                    <Button
                        id={record.id}
                        onClick={editRecord}
                        type="primary"
                    >
                        Edit
                    </Button>
                    <Button
                        id={record.id}
                        onClick={destroyRecord}
                        type="primary"
                        danger
                    >
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];
    //Loading New & Edit Forms based on record
    let buttonTxt;
    let baseForm;
    if (record.name == undefined) {
        buttonTxt = "Add";
        baseForm = (
            <SettingsForm
                stype={stype}
                sstatus={sstatus}
                submitForm={submitForm}
                data={data}
                setData={setData}
                savebutton={buttonTxt}
            />
        );
    } else {
        buttonTxt = "Save";
        baseForm = (
            <SettingsForm
                stype={stype}
                sstatus={sstatus}
                submitForm={updateForm}
                data={data}
                setData={setData}
                savebutton={buttonTxt}
            />
        );
    }

    return (
        <>
            <Head title={`Setting List Options`} />

            <Card title={`Settings List`}>
                {baseForm}

                <Table
                    columns={columns}
                    dataSource={settingsList}
                    size="small"
                />
            </Card>
        </>
    );
};

Settingsview.layout = (page) => <AuthenticatedLayout children={page} />;
export default Settingsview;
