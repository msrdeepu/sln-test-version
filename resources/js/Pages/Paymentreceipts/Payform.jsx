import React from "react";
import { router } from "@inertiajs/react";
import { Row, Col, Form, Input, Select, DatePicker, Button } from "antd";
const { TextArea } = Input;

const onCancelData = () => {
    window.alert("Are You Sure Want to Cancel?");
    router.get(route("branches.index"));
};

const Payform = ({ saveButton }) => {
    return (
        <Form layout="vertical">
            <Row gutter={[8, 4]}>
                <Col xs={24} md={12}>
                    <Form.Item label="Receipt Number" name="receiptnum">
                        <Input
                            name="receiptnum"
                            placeholder="Enter Receipt Number"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Refference No" name="refnum">
                        <Input
                            name="refnum"
                            placeholder="Enter Refference Number"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Venture" name="venture">
                        <Select
                            name="venture"
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
                            // onChange={handleCompany}
                            placeholder="--select venture--"
                            style={{
                                width: "100%",
                            }}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Project Name" name="projectname">
                        <Input
                            name="projectname"
                            placeholder="Enter Project Name"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Location" name="projectlocation">
                        <Input
                            name="projectlocation"
                            placeholder="Enter Project Location"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Property" name="property">
                        <Select
                            name="property"
                            options={[
                                {
                                    value: "Demo Developers",
                                    label: "Demo Developers",
                                },
                            ]}
                            // onChange={handleCompany}
                            placeholder="--select venture--"
                            style={{
                                width: "100%",
                            }}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Property Code" name="propertycode">
                        <Input
                            name="propertycode"
                            placeholder="Enter Property Code"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Property Name" name="propertyname">
                        <Input
                            name="propertyname"
                            placeholder="Enter Property Name"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item
                        label="Property Location"
                        name="propertylocation"
                    >
                        <Input
                            name="propertylocation"
                            placeholder="Enter Property Location"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Plot No" name="plotnum">
                        <Input name="plotnum" placeholder="Enter Plot Number" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Plot Price" name="plotprice">
                        <Input
                            name="plotprice"
                            placeholder="Enter Plot Actual Price"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Discount" name="plotdiscountprice">
                        <Input
                            name="plotdiscountprice"
                            placeholder="Enter Offer Price"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Paid Amount" name="paidamount">
                        <Input
                            name="paidamount"
                            placeholder="Enter Paid Amount"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Paid On" name="paidon">
                        <DatePicker
                            style={{ width: "100%" }}
                            name="paidon"
                            placeholder="Paid On"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Payment Method" name="paymentmethod">
                        <Select
                            name="paymentmethod"
                            options={[
                                {
                                    value: "Demo Developers",
                                    label: "Demo Developers",
                                },
                            ]}
                            // onChange={handleCompany}
                            placeholder="--select venture--"
                            style={{
                                width: "100%",
                            }}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Company" name="company">
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
                            // onChange={handleCompany}
                            placeholder="--select company--"
                            style={{
                                width: "100%",
                            }}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Branch" name="branch">
                        <Select
                            name="branch"
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
                            // onChange={handleCompany}
                            placeholder="--select branch--"
                            style={{
                                width: "100%",
                            }}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Account" name="account">
                        <Select
                            name="account"
                            options={[
                                {
                                    value: "Demo account",
                                    label: "Demo account",
                                },
                            ]}
                            // onChange={handleCompany}
                            placeholder="--select account--"
                            style={{
                                width: "100%",
                            }}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Customer" name="customer">
                        <Select
                            name="customer"
                            options={[
                                {
                                    value: "Demo Developers",
                                    label: "Demo Developers",
                                },
                            ]}
                            // onChange={handleCompany}
                            placeholder="--select customer--"
                            style={{
                                width: "100%",
                            }}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Display Name" name="dname">
                        <Input name="dname" placeholder="Enter Display Name" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Agent" name="agent">
                        <Select
                            name="agent"
                            options={[
                                {
                                    value: "Demo Developers",
                                    label: "Demo Developers",
                                },
                            ]}
                            // onChange={handleCompany}
                            placeholder="--select venture--"
                            style={{
                                width: "100%",
                            }}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Agent CODE" name="agentcode">
                        <Input name="agentcode" placeholder="Enter Agentcode" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Category" name="category">
                        <Select
                            name="category"
                            options={[
                                {
                                    value: "Demo Developers",
                                    label: "Demo Developers",
                                },
                            ]}
                            // onChange={handleCompany}
                            placeholder="--select category--"
                            style={{
                                width: "100%",
                            }}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Purpose" name="purpose">
                        <Input
                            name="purpose"
                            placeholder="Enter Payment Purpose"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Details" name="details">
                        <TextArea
                            name="details"
                            placeholder="Enter Details Here"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Cheque NO" name="chequenum">
                        <Input
                            name="chequenum"
                            placeholder="Enter Cheque Number"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="D.D. NO" name="ddnum">
                        <Input
                            name="ddnum"
                            placeholder="Enter Demand Draft Number"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Drawn On" name="drawnon">
                        <DatePicker
                            style={{ width: "100%" }}
                            placeholder="Drawn On"
                            name="drawnon"
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
                    //onClick={handelForm}
                    htmlType="submit"
                    className="btn-item"
                    type="primary"
                >
                    {(saveButton = "Save")}
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
    );
};

export default Payform;
