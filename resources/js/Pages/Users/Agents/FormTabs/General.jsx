import React, { useState } from "react";
import { Col, Row, Form, Input, Select, DatePicker } from "antd";

const General = () => {
    const [mcode, setMcode] = useState("05376/9/SLN-596470");
    return (
        <div>
            <Row gutter={[8, 4]}>
                <Col xs={24} md={12}>
                    <Form.Item name="surname" label="Surname" rules={""}>
                        <Input
                            placeholder="Enter Surname"
                            type="text"
                            name="surname"
                            onChange={""}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item name="fullname" label="Full Name" rules={""}>
                        <Input
                            placeholder="Enter Full Name"
                            type="text"
                            name="fullname"
                            onChange={""}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item name="careof" label="Care Of" rules={""}>
                        <Select
                            defaultValue="---Select---"
                            style={{ width: "100%" }}
                            //onChange={handleChange}
                            options={[
                                { value: "Son", label: "Son" },
                                { value: "Father", label: "Father" },
                                { value: "Mother", label: "Mother" },
                                { value: "Daughter", label: "Daughter" },
                                { value: "Husband", label: "Husband" },
                                { value: "Wife", label: "Wife" },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item name="carename" label="Care Of Name" rules={""}>
                        <Input
                            placeholder="Enter Care of Name"
                            type="text"
                            name="carename"
                            onChange={""}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item name="" label="Branch" rules={""}>
                        <Select
                            defaultValue="---Select Branch---"
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
                    <Form.Item name="mcode" label="MCODE" rules={""}>
                        {" "}
                        <Select
                            name="mcode"
                            defaultValue="---Select MCODE---"
                            style={{ width: "100%" }}
                            //onChange={handleChange}
                            options={[
                                {
                                    value: "05376/9/SLN-596470",
                                    label: "05376/9/SLN-596470",
                                },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item name="" label="Level" rules={""}>
                        <Select
                            defaultValue="---Select Level---"
                            style={{ width: "100%" }}
                            //onChange={handleChange}
                            options={[
                                {
                                    value: "Managing",
                                    label: "Managing Director",
                                },
                                {
                                    value: "Developmentofficer",
                                    label: "Development Officer",
                                },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item name="agentcode" label="Agent Code" rules={""}>
                        <Input
                            name="agentcode"
                            placeholder="Enter Agent Code"
                            onChange={""}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item name="pannum" label="Pan No." rules={""}>
                        <Input
                            placeholder="Enter Pan Number"
                            type="text"
                            name="pannum"
                            onChange={""}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item name="" label="Adhar No." rules={""}>
                        <Input
                            placeholder="Enter Adhar Number"
                            type="number"
                            name="adharnum"
                            onChange={""}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item name="adharnum" label="Date Of Birth" rules={""}>
                        <DatePicker style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item name="occupation" label="Occupation" rules={""}>
                        <Select
                            name="occupation"
                            defaultValue="---Select Occupation---"
                            style={{ width: "100%" }}
                            //onChange={handleChange}
                            options={[
                                {
                                    value: "Supervisor",
                                    label: "Supervisor",
                                },
                                {
                                    value: "officer",
                                    label: "Officer",
                                },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item name="religion" label="Religion" rules={""}>
                        <Select
                            name="religion"
                            defaultValue="---Select Religion---"
                            style={{ width: "100%" }}
                            //onChange={handleChange}
                            options={[
                                {
                                    value: "Hindhu",
                                    label: "Hindhu",
                                },
                                {
                                    value: "Christian",
                                    label: "Christian",
                                },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item
                        name="nationality"
                        label="Nationality"
                        rules={""}
                    >
                        <Select
                            name="nationality"
                            defaultValue="---Select Nationality---"
                            style={{ width: "100%" }}
                            //onChange={handleChange}
                            options={[
                                {
                                    value: "Indian",
                                    label: "Indian",
                                },
                                {
                                    value: "American",
                                    label: "American",
                                },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item
                        name="martialstatus"
                        label="Martial Status"
                        rules={""}
                    >
                        <Select
                            name="martialstatus"
                            defaultValue="---Select Martial Status---"
                            style={{ width: "100%" }}
                            //onChange={handleChange}
                            options={[
                                {
                                    value: "Married",
                                    label: "Married",
                                },
                                {
                                    value: "Unmarried",
                                    label: "Unmarried",
                                },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item
                        name="joblocation"
                        label="Job Location"
                        rules={""}
                    >
                        <Input
                            name="joblocation"
                            placeholder="Enter Job location"
                            type="text"
                            onChange={""}
                        />
                    </Form.Item>
                </Col>
            </Row>
        </div>
    );
};

export default General;
