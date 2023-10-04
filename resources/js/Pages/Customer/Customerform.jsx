import React from "react";
import { router } from "@inertiajs/react";
import { Col, Row, Form, Input, DatePicker, Select, Radio, Button } from "antd";
const { TextArea } = Input;

const onCancelData = () => {
    window.alert("Are You Sure Want to Cancel?");
    router.get(route("customer.index"));
};

const Customerform = ({ props, saveButton }) => {
    return (
        <Form layout="vertical">
            <Row gutter={[8, 4]}>
                <Col xs={24} md={12}>
                    <Form.Item label="Sur Name" name="surname">
                        <Input name="surname" placeholder="Enter Sur Name" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Full Name" name="fullname">
                        <Input name="fullname" placeholder="Enter Full Name" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Care Of" name="careof">
                        <Select
                            name="careof"
                            options={[
                                {
                                    value: "SON",
                                    label: "SON",
                                },
                            ]}
                            // onChange={handleCompany}
                            placeholder="--select care of--"
                            style={{
                                width: "100%",
                            }}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Enter Person Name" name="carename">
                        <Input
                            name="carename"
                            placeholder="Enter Care of Person Name"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Organization" name="organization">
                        <Input
                            name="organization"
                            placeholder="Enter Organization Name"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Select Branch" name="branch">
                        <Select
                            name="branch"
                            options={[
                                {
                                    value: "Branch",
                                    label: "Branch",
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
                    <Form.Item label="Code" name="code">
                        <Input name="code" placeholder="Enter Code" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Pan Number" name="pannumber">
                        <Input
                            name="pannumber"
                            placeholder="Enter Pan Number"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Adhar Number" name="adharnumber">
                        <Input
                            name="adharnumber"
                            placeholder="Enter Adhar Number"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="GST / TAX ID" name="gstax">
                        <Input name="gstax" placeholder="Enter GST / TAX ID" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Date Of Birth" name="dateofbirth">
                        <DatePicker
                            style={{ width: "100%" }}
                            name="dateofbirth"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Mobile Number" name="mbile">
                        <Input
                            name="mobile"
                            type="number"
                            placeholder="Enter Mobile Number"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Phone Number" name="phone">
                        <Input
                            name="phone"
                            placeholder="Enter Mobile Number"
                            type="number"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Alternate Mobile Number" name="altmobile">
                        <Input
                            name="altmobile"
                            placeholder="Enter Alt.Mobile Numner"
                            type="number"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="WhatsApp Number" name="whatsapp">
                        <Input
                            name="whatsapp"
                            placeholder="Enter Your Whats App Number"
                            type="number"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Slect Occupation" name="occupation">
                        <Select
                            name="occupation"
                            options={[
                                {
                                    value: "Manager",
                                    label: "Manager",
                                },
                            ]}
                            // onChange={handleCompany}
                            placeholder="--select manager--"
                            style={{
                                width: "100%",
                            }}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Select Nationality" name="nationality">
                        <Select
                            name="nationality"
                            options={[
                                {
                                    value: "Indian",
                                    label: "Indian",
                                },
                            ]}
                            // onChange={handleCompany}
                            placeholder="--select Naionality--"
                            style={{
                                width: "100%",
                            }}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Joined On" name="joinedon">
                        <DatePicker style={{ width: "100%" }} name="joinedon" />
                    </Form.Item>
                </Col>
                <Col xs={24}>
                    <Form.Item label="Address" name="address">
                        <TextArea
                            rows={3}
                            name="address"
                            placeholder="Enter Customer Address"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Select Country" name="country">
                        <Select
                            name="country"
                            options={[
                                {
                                    value: "India",
                                    label: "India",
                                },
                            ]}
                            // onChange={handleCompany}
                            placeholder="--select Country--"
                            style={{
                                width: "100%",
                            }}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Select State" name="state">
                        <Select
                            name="state"
                            options={[
                                {
                                    value: "AP",
                                    label: "AP",
                                },
                            ]}
                            // onChange={handleCompany}
                            placeholder="--select State--"
                            style={{
                                width: "100%",
                            }}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Select District" name="district">
                        <Select
                            name="district"
                            options={[
                                {
                                    value: "Tirupati",
                                    label: "Tirupati",
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
                    <Form.Item label="Pin Code" name="pincode">
                        <Input name="pincode" placeholder="Enter Postal Code" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Nominee Name" name="nomineename">
                        <Input
                            name="nomineename"
                            placeholder="Enter Nominee Name"
                        />
                    </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                    <Form.Item
                        label="Relationship With Nominee"
                        name="nomineerelation"
                    >
                        <Input
                            name="nomineerelation"
                            placeholder="Enter Relationship with Nominee"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Nominee DOB" name="nomineedob">
                        <DatePicker
                            style={{ width: "100%" }}
                            name="nomineedob"
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Photo" name="photo">
                        <input
                            name="photo"
                            type="file"
                            style={{
                                width: "100%",
                                borderStyle: "solid",
                                borderWidth: "0.5px",
                                padding: "2px",
                                borderColor: "#D9D9D9",
                                borderRadius: "6px",
                            }}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Active" name="active">
                        <Radio.Group name="active">
                            <Radio value={"YES"}>YES</Radio>
                            <Radio value={"NO"}>NO</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Has Login" name="loginhas">
                        <Radio.Group name="loginhas">
                            <Radio value={"YES"}>YES</Radio>
                            <Radio value={"NO"}>NO</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Col>
                <Col xs={24}>
                    <Form.Item label="Nominee Address" name="nomineeaddress">
                        <TextArea
                            rows={3}
                            name="nomineeaddress"
                            placeholder="Enter Nominee Address"
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
                    // onClick={handelForm}
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

export default Customerform;
