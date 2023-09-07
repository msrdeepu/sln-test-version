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

function Createcompany(props) {
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log("radio checked", e.target.value);
        setValue(e.target.value);
    };
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Company Details`}>
                <Form layout="vertical">
                    <Row gutter={[8, 4]}>
                        <Col xs={24} md={12}>
                            <Form.Item label="Company Name">
                                <Input
                                    type="text"
                                    placeholder="Enter Company Name Here"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Domain Name">
                                <Input
                                    type="text"
                                    placeholder="Enter Domain Name Here"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="GST/TAX NO:">
                                <Input type="text" placeholder="GST/Tax No" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="PAN NO">
                                <Input type="text" placeholder="PAN NO" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="UPI ID">
                                <Input type="text" placeholder="UPI ID" />
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
                            <Form.Item label="Website URL">
                                <Input
                                    type="text"
                                    placeholder="Enter Website URL Here"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="LOGO">
                                <input className="input-item" type="file" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={8}>
                            <Form.Item label="QR Code">
                                <input className="input-item" type="file" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={8}>
                            <Form.Item label="QR Code">
                                <Select
                                    defaultValue="Demo"
                                    style={{
                                        width: "100%",
                                    }}
                                    options={[
                                        {
                                            value: "lucy",
                                            label: "Lucy",
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={8}>
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
                                        justifyContent: "center",
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
                                <TextArea placeholder="Enter Your Address here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Bank Details">
                                <TextArea placeholder="Enter Your Bank Details Here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Terms">
                                <TextArea placeholder="Enter Your Terms Here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Note">
                                <TextArea placeholder="Note Points" />
                            </Form.Item>
                        </Col>
                        <Col xs={24}>
                            <Form.Item label="Footer">
                                <TextArea placeholder="Footer Here" />
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

Createcompany.layout = (page) => <AuthenticatedLayout children={page} />;

export default Createcompany;
