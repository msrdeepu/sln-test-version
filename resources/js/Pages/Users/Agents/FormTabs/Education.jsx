import React from "react";
import { Col, Row, Form, Input, Select, DatePicker } from "antd";
const { TextArea } = Input;

const Education = () => {
    return (
        <div>
            <Row gutter={[8, 4]}>
                <Col xs={24} md={12}>
                    <Form.Item label="Introducer" name={"introducer"}>
                        <Select
                            name="introducer"
                            defaultValue="---Select Introducer---"
                            style={{ width: "100%" }}
                            //onChange={handleChange}
                            options={[
                                { value: "Tirupati", label: "Tirupati" },
                                { value: "Nellore", label: "Nelore" },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Project Manager" name={"pm"}>
                        <Select
                            name="pm"
                            defaultValue="---Select Project Manager---"
                            style={{ width: "100%" }}
                            //onChange={handleChange}
                            options={[
                                { value: "Tirupati", label: "Tirupati" },
                                { value: "Nellore", label: "Nelore" },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Senior Project Manager" name={"spm"}>
                        <Select
                            name="spm"
                            defaultValue="---Select Senior Project Manager---"
                            style={{ width: "100%" }}
                            //onChange={handleChange}
                            options={[
                                { value: "Tirupati", label: "Tirupati" },
                                { value: "Nellore", label: "Nelore" },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Development Officer" name={"do"}>
                        <Select
                            name="do"
                            defaultValue="---Select Development Officer---"
                            style={{ width: "100%" }}
                            //onChange={handleChange}
                            options={[
                                { value: "Tirupati", label: "Tirupati" },
                                { value: "Nellore", label: "Nelore" },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Senior Development Officer" name={"sdo"}>
                        <Select
                            name="sdo"
                            defaultValue="---Select Senior Development Officer---"
                            style={{ width: "100%" }}
                            //onChange={handleChange}
                            options={[
                                { value: "Tirupati", label: "Tirupati" },
                                { value: "Nellore", label: "Nelore" },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Marketing Director" name={"md"}>
                        <Select
                            name="md"
                            defaultValue="---Select Marketing Director---"
                            style={{ width: "100%" }}
                            //onChange={handleChange}
                            options={[
                                { value: "Tirupati", label: "Tirupati" },
                                { value: "Nellore", label: "Nelore" },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Senior Marketing Director" name={"smd"}>
                        <Select
                            name="smd"
                            defaultValue="---Select Senior Marketing Director---"
                            style={{ width: "100%" }}
                            //onChange={handleChange}
                            options={[
                                { value: "Tirupati", label: "Tirupati" },
                                { value: "Nellore", label: "Nelore" },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Regional Marketing Director" name={"rmd"}>
                        <Select
                            name="rmd"
                            defaultValue="---Select Regional Marketing Director---"
                            style={{ width: "100%" }}
                            //onChange={handleChange}
                            options={[
                                { value: "Tirupati", label: "Tirupati" },
                                { value: "Nellore", label: "Nelore" },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Chief Marketing Director" name={"cmd"}>
                        <Select
                            name="cmd"
                            defaultValue="---Select Chief Marketing Director---"
                            style={{ width: "100%" }}
                            //onChange={handleChange}
                            options={[
                                { value: "Tirupati", label: "Tirupati" },
                                { value: "Nellore", label: "Nelore" },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Education" name={"education"}>
                        <Select
                            name="education"
                            defaultValue="---Select Education---"
                            style={{ width: "100%" }}
                            //onChange={handleChange}
                            options={[
                                { value: "Tirupati", label: "Tirupati" },
                                { value: "Nellore", label: "Nelore" },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24}>
                    <Form.Item
                        label="Additional Educational Details"
                        name={"adeducation"}
                    >
                        <TextArea
                            name="adeducation"
                            placeholder="Additional Educational Details"
                            rows={3}
                        />
                    </Form.Item>
                </Col>
            </Row>
        </div>
    );
};

export default Education;
