import React from "react";
import { Col, Row, Form, Input, DatePicker } from "antd";
const { TextArea } = Input;

const Bankdetails = () => {
    return (
        <Row gutter={[8, 4]}>
            <Col xs={24} md={12}>
                <Form.Item name={"joinedon"} label="Joined On">
                    <DatePicker style={{ width: "100%" }} name={"joinedon"} />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item name={"bankname"} label="Bank Name">
                    <Input name={"bankname"} placeholder="Enter Bank Name" />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item name={"accountnum"} label="Account Number">
                    <Input
                        name={"accountnum"}
                        placeholder="Bank Account Number"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item name={"ifsc"} label="Bank IFSC">
                    <Input name={"ifsc"} placeholder="Bank IFSC" />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item name={"bankbranch"} label="Bank Branch">
                    <Input name={"bankbranch"} placeholder="Bank Branch" />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item name={"upiId"} label="UPI ID">
                    <Input name={"upiId"} placeholder="Enter UPI ID" />
                </Form.Item>
            </Col>
        </Row>
    );
};

export default Bankdetails;
