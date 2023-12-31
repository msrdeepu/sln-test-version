import { router } from "@inertiajs/react";
import { Form, Input, Radio, Row, Col, Select, Button } from "antd";

const { TextArea } = Input;

const onCancelData = () => {
    window.alert("Are You Sure Want to Cancel?");
    router.get(route("branches.index"));
};

function BranchForm({ data, setData, submitForm, saveButton, record }) {
    const [form] = Form.useForm();

    const handleCompany = (value) => {
        setData("company", value);
        console.log(value);
    };

    const handelForm = () => {
        form.submit();
        form.setFieldsValue({
            code: "",
            company: "",
            status: "",
            location: "",
            email: "",
            phonenumber: "",
            mobilenumber: "",
            address: "",
        });
    };

    return (
        <>
            <Form
                layout="vertical"
                form={form}
                onFinish={submitForm}
                autoComplete="on"
                initialValues={{
                    code: data.code,
                    company: data.company,
                    status: data.status,
                    location: data.location,
                    email: data.email,
                    phonenumber: data.phonenumber,
                    mobilenumber: data.mobilenumber,
                    address: data.address,
                }}
            >
                <Row gutter={[8, 4]}>
                    <Col xs={24} md={12}>
                        <Form.Item
                            label="Code"
                            name={"code"}
                            rules={[
                                {
                                    required: true,
                                    message: "Please Enter Code",
                                },
                            ]}
                        >
                            <Input
                                type="text"
                                name="code"
                                placeholder="Enter Code here"
                                onChange={(e) =>
                                    setData("code", e.target.value)
                                }
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item
                            label="Company"
                            name="company"
                            rules={[
                                {
                                    required: true,
                                    message: "Please Select Company",
                                },
                            ]}
                        >
                            <Select
                                name="company"
                                options={[
                                    {
                                        value: "SLN Developers",
                                        label: "SLN Developers",
                                    },
                                    {
                                        value: "Demo Developers",
                                        label: "Demo Developers",
                                    },
                                ]}
                                onChange={handleCompany}
                                placeholder="--select company--"
                                style={{
                                    width: "100%",
                                }}
                            />
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                        <Form.Item
                            label="Location"
                            name={"location"}
                            rules={[
                                {
                                    required: true,
                                    message: "Please Enter Location",
                                },
                            ]}
                        >
                            <Input
                                name="location"
                                type="text"
                                placeholder="Location"
                                onChange={(e) =>
                                    setData("location", e.target.value)
                                }
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Email Address" name={"email"}>
                            <Input
                                name="email"
                                type="text"
                                placeholder="Enter Email Address Here"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Phone Number" name={"phonenumber"}>
                            <Input
                                name="phonenumber"
                                type="text"
                                placeholder="Enter Phone Number Here"
                                onChange={(e) =>
                                    setData("phonenumber", e.target.value)
                                }
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Mobile Number" name={"mobilenumber"}>
                            <Input
                                name="mobilenumber"
                                type="text"
                                placeholder="Enter Mobile Number Here"
                                onChange={(e) =>
                                    setData("mobilenumber", e.target.value)
                                }
                            />
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                        <Form.Item
                            label="Status - Account Status is Active or Not"
                            name="status"
                            style={{
                                width: "100%",
                            }}
                            rules={[
                                {
                                    required: true,
                                    message: "Please Select Status",
                                },
                            ]}
                        >
                            <Radio.Group
                                name="status"
                                onChange={(e) =>
                                    setData("status", e.target.value)
                                }
                                style={{
                                    display: "flex",
                                }}
                            >
                                <Radio value={"YES"}>YES</Radio>
                                <Radio value={"NO"}>NO</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Address" name={"address"}>
                            <TextArea
                                name="address"
                                placeholder="Address Here"
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <div style={{ textAlign: "center" }}>
                    <p>
                        Note: Fields Marked with (
                        <span style={{ color: "red" }}>*</span>) Astrik is
                        Mandatory.
                    </p>
                </div>
                <div className="btns-container">
                    <Button
                        onClick={handelForm}
                        htmlType="submit"
                        className="btn-item"
                        type="primary"
                    >
                        {saveButton}
                    </Button>
                    <Button
                        onClick={onCancelData}
                        className="btn-item"
                        type="primary"
                        danger
                    >
                        Cancel
                    </Button>
                </div>
            </Form>
        </>
    );
}

export default BranchForm;
