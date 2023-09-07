import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import {
    Card,
    DatePicker,
    Typography,
    Button,
    Col,
    Row,
    Space,
    Form,
    Input,
    Select,
    Radio,
} from "antd";

//custom css file
import "./property.css";

import { useState } from "react";
const { TextArea } = Input;
//rich text editor

function CreateProperty(props) {
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Property Details`}>
                <Form layout="vertical">
                    <Row gutter={[8, 3]}>
                        <Col xs={24} md={12}>
                            <Form.Item label="Code">
                                <Input placeholder="Enter Code" type="text" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Venture">
                                <Select
                                    defaultValue="---Select Venture---"
                                    style={{
                                        width: "100%",
                                    }}
                                    options={[
                                        {
                                            value: "Demo",
                                            label: "Demo",
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Plot/Flat No#">
                                <Input
                                    placeholder="Enter Plot No"
                                    type="text"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Title">
                                <Input
                                    placeholder="Enter Property Name Here"
                                    type="text"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Location">
                                <Input
                                    placeholder="Enter Location Here"
                                    type="text"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Village/Area">
                                <Input
                                    placeholder="Enter village/area Name Here"
                                    type="text"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Survey No#">
                                <Input
                                    placeholder="Enter Survey Numbers here"
                                    type="text"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Plot Facing">
                                <Select
                                    defaultValue="---Plot Facing---"
                                    style={{
                                        width: "100%",
                                    }}
                                    options={[
                                        {
                                            value: "Demo",
                                            label: "Demo",
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24}>
                            <p>Property Boundaries</p>
                            <hr className="hr-ruler" />
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="North">
                                <Input
                                    placeholder="Enter Plot North Boundry"
                                    type="text"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="South">
                                <Input
                                    placeholder="Enter Plot South Boundry"
                                    type="text"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="East">
                                <Input
                                    placeholder="Enter Plot East Boundry"
                                    type="text"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="West">
                                <Input
                                    placeholder="Enter Plot West Boundry"
                                    type="text"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24}>
                            <hr className="hr-ruler" />
                        </Col>

                        <Col xs={24} md={12}>
                            <Form.Item label="Road Size">
                                <Input
                                    placeholder="Enter Road Size here"
                                    type="text"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Customer">
                                <Select
                                    defaultValue="---Select Customer---"
                                    style={{
                                        width: "100%",
                                    }}
                                    options={[
                                        {
                                            value: "Demo",
                                            label: "Demo",
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Display Name">
                                <Input
                                    placeholder="Enter Display Name here"
                                    type="text"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Agent">
                                <Select
                                    defaultValue="---Select Agent---"
                                    style={{
                                        width: "100%",
                                    }}
                                    options={[
                                        {
                                            value: "Demo",
                                            label: "Demo",
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Agent Code">
                                <Input
                                    placeholder="Enter Agent Code here"
                                    type="text"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Length">
                                <Input placeholder="Enter Plot Length Feets here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Width">
                                <Input placeholder="Enter Plot Width Feets here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Dimensions">
                                <Input placeholder="Enter Plot Dimensions Feets here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Total Square Feets">
                                <Input placeholder="Enter Plot Area in Square Feets here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Total Square Yards">
                                <Input placeholder="Enter Plot Area in Square Yards here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Total Ankanams">
                                <Input placeholder="Enter Plot Area in Ankanams here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Ankanam Cost">
                                <Input placeholder="Enter Plot Area in Ankanams Cost here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Plot Price">
                                <Input placeholder="Enter Plot Price Amount here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Discount">
                                <Input placeholder="EnterOffer Price Amount here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Total Cost">
                                <Input placeholder="Enter Total Plot Cost After Discount here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Date of Booking">
                                <DatePicker
                                    style={{
                                        width: "100%",
                                    }}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Status">
                                <Select
                                    defaultValue="---Available---"
                                    style={{
                                        width: "100%",
                                    }}
                                    options={[
                                        {
                                            value: "Demo",
                                            label: "Demo",
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Installment">
                                <Input placeholder="Enter Each Installment Amount Here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Installment">
                                <Input placeholder="Enter Total Installments Here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Approval Authority">
                                <Input placeholder="Enter Approval Authority (Rera / DTCP / MP/ Panchayath ...) Here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Address">
                                <TextArea />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Status Remarks">
                                <TextArea />
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

CreateProperty.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreateProperty;
