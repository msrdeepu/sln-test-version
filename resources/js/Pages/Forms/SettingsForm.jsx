import { Space, Form, Select, Input, Button } from "antd";

function SettingsForm({
    stype,
    sstatus,
    submitForm,
    setData,
    data,
    savebutton,
}) {
    const [form] = Form.useForm();

    const handleSChange = (value) => {
        setData("status", value);
    };

    const handleTChange = (value) => {
        setData("type", value);
    };

    const handelForm = () => {
        form.submit();
        form.setFieldsValue({
            name: "",
            type: "",
            value: "",
            code: "",
            dorder: "",
            status: "",
        });
    };

    return (
        <>
            {" "}
            <Form
                layout="vertical"
                onFinish={submitForm}
                form={form}
                autoComplete="on"
                initialValues={{
                    name: data.name,
                    value: data.value,
                    type: data.type,
                    code: data.code,
                    dorder: data.dorder,
                    status: data.status,
                }}
            >
                <Space direction="horizontal">
                    <Form.Item
                        label="Type :"
                        name="type"
                        rules={[{ required: true }]}
                    >
                        <Select
                            placeholder="--- Select Option Type ---"
                            options={stype}
                            style={{ width: "200px" }}
                            onChange={handleTChange}
                        ></Select>
                    </Form.Item>

                    <Form.Item
                        label="Name :"
                        name="name"
                        rules={[{ required: true }]}
                    >
                        <Input
                            onChange={(e) => setData("name", e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Value :"
                        name="value"
                        rules={[{ required: true }]}
                    >
                        <Input
                            onChange={(e) => setData("value", e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item label="Parent Code :" name="code">
                        <Input
                            onChange={(e) => setData("code", e.target.code)}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Disply Order :"
                        name="dorder"
                        rules={[{ required: true }]}
                    >
                        <Input
                            onChange={(e) => setData("dorder", e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Status :"
                        name="status"
                        rules={[{ required: true }]}
                    >
                        <Select
                            placeholder="--- Select Status ---"
                            options={sstatus}
                            style={{ width: "200px" }}
                            onChange={handleSChange}
                        ></Select>
                    </Form.Item>
                    <Button type="primary" onClick={handelForm}>
                        {savebutton}
                    </Button>
                </Space>
            </Form>{" "}
        </>
    );
}

export default SettingsForm;
