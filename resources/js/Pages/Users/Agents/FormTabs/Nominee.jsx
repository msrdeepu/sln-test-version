import React from "react";
import { Col, Row, Form, Input, Radio, Select } from "antd";

const { TextArea } = Input;

const Nominee = () => {
    return (
        <Row gutter={[8, 4]}>
            <Col xs={24} md={12}>
                <Form.Item label="Nominee Name" name="nomineename">
                    <Input
                        name="nomineename"
                        placeholder="Enter Nominee Name"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Relation With Nominee" name="nomrelation">
                    <Input
                        name="nomrelation"
                        placeholder="Enter Relation With Nominee"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Photo" name="nomphoto">
                    <input
                        name="nomphoto"
                        type="file"
                        style={{
                            width: "100%",
                            borderStyle: "solid",
                            borderRadius: "4px",
                            borderWidth: "0.5px",
                            padding: "1px",
                            borderColor: "#D9D9D9",
                        }}
                    />
                </Form.Item>
            </Col>

            <Col xs={24} md={12}>
                <Form.Item label="Nominee Education" name="nomeducation">
                    <Select
                        name="nomeducation"
                        defaultValue="---Select Nominee Education---"
                        style={{ width: "100%" }}
                        //onChange={handleChange}
                        options={[
                            {
                                value: "Degree",
                                label: "Degree",
                            },
                        ]}
                    />
                </Form.Item>
            </Col>

            <Col xs={24} md={12}>
                <Form.Item label="Nominee Co-worker" name="nomcoworker">
                    {" "}
                    <Radio.Group>
                        <Radio value={"YES"}>YES</Radio>
                        <Radio value={"NO"}>NO</Radio>
                    </Radio.Group>
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Active" name="">
                    {" "}
                    <Radio.Group>
                        <Radio value={"YES"}>YES</Radio>
                        <Radio value={"NO"}>NO</Radio>
                    </Radio.Group>
                </Form.Item>
            </Col>
            <Col xs={24}>
                <Form.Item label="Nomenee Address" name="nomaddress">
                    <TextArea
                        rows={3}
                        name="nomaddress"
                        placeholder="Enter Nominee Address"
                    />
                </Form.Item>
            </Col>
        </Row>
    );
};

export default Nominee;
