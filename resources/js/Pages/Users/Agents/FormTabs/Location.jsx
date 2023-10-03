import React from "react";
import { Col, Row, Form, Input, DatePicker, Select } from "antd";
const { TextArea } = Input;

const Location = () => {
    return (
        <Row gutter={[8, 4]}>
            <Col xs={24} md={12}>
                <Form.Item label="Country" name={"country"}>
                    <Select
                        name="country"
                        defaultValue="---Select Country---"
                        style={{ width: "100%" }}
                        //onChange={handleChange}
                        options={[
                            {
                                value: "India",
                                label: "India",
                            },
                        ]}
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="State" name={"state"}>
                    <Select
                        name="state"
                        defaultValue="---Select State---"
                        style={{ width: "100%" }}
                        //onChange={handleChange}
                        options={[
                            {
                                value: "Andhra Pradesh",
                                label: "Andhra Pradesh",
                            },
                        ]}
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="District" name={"district"}>
                    <Select
                        name="district"
                        defaultValue="---Select District---"
                        style={{ width: "100%" }}
                        //onChange={handleChange}
                        options={[
                            {
                                value: "Tirupati",
                                label: "Tirupati",
                            },
                        ]}
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Pin Code" name={"pincode"}>
                    <Input name="pincode" placeholder="Enter Pin Code" />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Address" name={"address"}>
                    <TextArea name="address" placeholder="address" />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Perminant Address" name={"permaddress"}>
                    <TextArea name="permaddress" placeholder="" />
                </Form.Item>
            </Col>
        </Row>
    );
};

export default Location;
