import React from "react";
import { router } from "@inertiajs/react";
import { Col, Row, Form, Input, DatePicker, Select, Button } from "antd";
const { TextArea } = Input;

const onCancelData = () => {
    window.alert("Are You Sure Want to Cancel?");
    router.get(route("cashadvance.index"));
};

const CashForm = ({ saveButton }) => {
    return (
        <div>
            <Form layout="vertical">
                <Row gutter={[8, 4]}>
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
                                //onChange={handleCompany}
                                placeholder="--select agent--"
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
                                //onChange={handleCompany}
                                placeholder="--select company--"
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
                                        value: "Demo Developers",
                                        label: "Demo Developers",
                                    },
                                ]}
                                //onChange={handleCompany}
                                placeholder="--select company--"
                                style={{
                                    width: "100%",
                                }}
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
                                //onChange={handleCompany}
                                placeholder="--select company--"
                                style={{
                                    width: "100%",
                                }}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Amount" name="amount">
                            <Input
                                name="amount"
                                placeholder="Enter Paid Amount Here"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Cheque / DD NO" name="cheque">
                            <Input
                                name="cheque"
                                placeholder="Enter Cheque Number Here"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Drawn On" name="drawn">
                            <DatePicker
                                style={{ width: "100%" }}
                                name="drawn"
                                placeholder="Cheque / DD drawn Date"
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
        </div>
    );
};

export default CashForm;
