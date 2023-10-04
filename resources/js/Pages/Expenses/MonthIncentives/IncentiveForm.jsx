import React from "react";
import { router } from "@inertiajs/react";
import { Col, Row, Form, Input, DatePicker, Select, Button } from "antd";
const { TextArea } = Input;
const { RangePicker } = DatePicker;

const onCancelData = () => {
    window.alert("Are You Sure Want to Cancel?");
    router.get(route("monthlyincentive.index"));
};

const IncentiveForm = ({ saveButton }) => {
    return (
        <Form layout="vertical">
            <Row gutter={[8, 4]}>
                <Col xs={24} md={12}>
                    <Form.Item label="Incentive Type" name="incentivetype">
                        {" "}
                        <Select
                            name="incentivetype"
                            options={[
                                {
                                    value: "Demo Developers",
                                    label: "Demo Developers",
                                },
                            ]}
                            //onChange={handleCompany}
                            placeholder="--select Incentive Type--"
                            style={{
                                width: "100%",
                            }}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Duration" name="duration">
                        <RangePicker
                            style={{ width: "100%" }}
                            name="duration"
                            placeholder="Select Duration"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Agent" name="agent">
                        {" "}
                        <Select
                            name="agent"
                            options={[
                                {
                                    value: "Demo Agent",
                                    label: "Demo Agent",
                                },
                            ]}
                            //onChange={handleCompany}
                            placeholder="--select agent--"
                            style={{
                                width: "100%",
                            }}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Account" name="account">
                        {" "}
                        <Select
                            name="company"
                            options={[
                                {
                                    value: "Cash @ TPT",
                                    label: "Cash @ TPT",
                                },
                            ]}
                            //onChange={handleCompany}
                            placeholder="--select Account--"
                            style={{
                                width: "100%",
                            }}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Business" name="business">
                        <Input name="business" placeholder="Business" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Payment Method" name="paymentmethod">
                        {" "}
                        <Select
                            name="company"
                            options={[
                                {
                                    value: "Method",
                                    label: "Method",
                                },
                            ]}
                            //onChange={handleCompany}
                            placeholder="--Select Payment Method--"
                            style={{
                                width: "100%",
                            }}
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
                    <Form.Item label="Amount" name="amount">
                        <Input name="amount" placeholder="Enter Amount" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="TDS" name="tds">
                        <Input name="tds" placeholder="Enter TDS" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="GST" name="gst">
                        <Input name="gst" placeholder="Enter GST" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Cheque NO" name="chequeno">
                        <Input name="chequeno" placeholder="chequeno" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="D.D. NO" name="ddnum">
                        <Input
                            name="ddnum"
                            placeholder="Enter DD Number here"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Drawn On" name="drawnon">
                        <Input name="drawnon" placeholder="Drawn On" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Transaction ID" name="transactionid">
                        <Input
                            name="transactionid"
                            placeholder="Enter Transaction ID"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24}>
                    <Form.Item label="Description" name="description">
                        <TextArea
                            rows={3}
                            name="description"
                            placeholder="Enter Descriptin Here"
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

export default IncentiveForm;
