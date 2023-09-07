import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import {
    Card,
    Typography,
    Form,
    Input,
    Radio,
    DatePicker,
    Row,
    Col,
    Select,
    Button,
} from "antd";
import { useState } from "react";
const { TextArea } = Input;

function Createbranch(props) {
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log("radio checked", e.target.value);
        setValue(e.target.value);
    };
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Branch Details`}>
                <Form layout="vertical">
                    <Row gutter={[8, 4]}>
                        <Col xs={24} md={12}>
                            <Form.Item label="Code">
                                <Input
                                    type="text"
                                    placeholder="Enter Code here"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Company">
                                <Select
                                    defaultValue="SLN Developers"
                                    style={{
                                        width: "100%",
                                    }}
                                    options={[
                                        {
                                            value: "SLN Developers",
                                            label: "SLN Developers",
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </Col>

                        <Col xs={24} md={12}>
                            <Form.Item label="Location">
                                <Input type="text" placeholder="Location" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Email Address">
                                <Input
                                    type="text"
                                    placeholder="Enter Email Address Here"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Phone Number">
                                <Input
                                    type="text"
                                    placeholder="Enter Phone Number Here"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Mobile Number">
                                <Input
                                    type="text"
                                    placeholder="Enter Mobile Number Here"
                                />
                            </Form.Item>
                        </Col>

                        <Col xs={24} md={12}>
                            <Form.Item
                                label="Status - Account Status is Active or Not"
                                style={{
                                    width: "100%",
                                }}
                            >
                                <Radio.Group
                                    onChange={onChange}
                                    style={{
                                        display: "flex",
                                    }}
                                    value={value}
                                >
                                    <Radio value={1}>YES</Radio>
                                    <Radio value={2}>NO</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Address">
                                <TextArea placeholder="Address Here" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <div style={{ textAlign: "center" }}>
                        <p>Note: Fields Marked with (*) Astrik is Mandatory.</p>
                    </div>
                    <div className="btns-container">
                        <Button className="btn-item" type="primary">
                            Save
                        </Button>
                        <Button className="btn-item" type="primary" danger>
                            Cancel
                        </Button>
                    </div>
                </Form>
            </Card>
        </>
    );
}

Createbranch.layout = (page) => <AuthenticatedLayout children={page} />;

export default Createbranch;
