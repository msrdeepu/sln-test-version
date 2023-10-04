import { router } from "@inertiajs/react";
import { Form, Input, Radio, Row, Col, Select, Button, DatePicker } from "antd";
const { TextArea } = Input;

const onCancelData = () => {
    window.alert("Are You Sure Want to Cancel?");
    router.get(route("receipts.index"));
};

const ReceiptsForm = ({ saveButton }) => {
    return (
        <>
            <Form layout="vertical">
                <Row gutter={[8, 4]}>
                    <Col xs={24} md={12}>
                        <Form.Item label="Receipt Number" name="recptnum">
                            <p
                                style={{
                                    width: "100%",
                                    borderStyle: "solid",
                                    borderWidth: "0.5px",
                                    borderRadius: "6px",
                                    padding: "4px",
                                    borderColor: "#D9D9D9",
                                }}
                            >
                                12345
                            </p>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Agreement Number" name="agreemnum">
                            <Input
                                name="agreemnum"
                                placeholder="Enter Agreement Number"
                                type="text"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Select Property" name="property">
                            <Select
                                name="property"
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
                                placeholder="--select Property--"
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
                        <Form.Item label="Plot Number" name="plotnumber">
                            <Input
                                name="plotnumber"
                                placeholder="Enter Plot Number"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item
                            label="Venture/Project Name"
                            name="venturename"
                        >
                            <Input
                                name="venturename"
                                placeholder="Enter Venture/Project Name"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item
                            label="Venture/Project Location"
                            name="venturelocation"
                        >
                            <Input
                                name="venturelocation"
                                placeholder="Enter Venture/Project Location"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item
                            label="Plot Actual Price"
                            name="plotactualprice"
                        >
                            <Input
                                name="plotactualprice"
                                placeholder="Enter Plot Actual Price Amount Here"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Discount" name="plotdiscprice">
                            <Input
                                name="plotdiscprice"
                                placeholder="Enter Offer Price Amount Here"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Paid Amount" name="paidamount">
                            <Input
                                name="paidamount"
                                placeholder="Enter Paid Amount Here"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Paid On" name="paidondate">
                            <Input
                                placeholder="Enter Paid Date"
                                name="paidondate"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item
                            label="Select Payment Method"
                            name="paymentmethod"
                        >
                            <Select
                                name="paymentmethod"
                                options={[
                                    {
                                        value: "Cash",
                                        label: "Cash",
                                    },
                                    {
                                        value: "Cheque",
                                        label: "Cheque",
                                    },
                                ]}
                                // onChange={handleCompany}
                                placeholder="--Select Payment Method--"
                                style={{
                                    width: "100%",
                                }}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Cheque NO" name="chequeno">
                            <Input
                                name="chequeno"
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
                                name="drawnon"
                            />
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                        <Form.Item
                            label="Select Customer"
                            name="selectcustomer"
                        >
                            <Select
                                name="selectcustomer"
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
                        <Form.Item label="Display Name" name="dispname">
                            <Input
                                name="dispname"
                                placeholder="Enter Display Name"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Select Agent" name="agent">
                            <Select
                                name="agent"
                                options={[
                                    {
                                        value: "Demo Developers",
                                        label: "Demo Developers",
                                    },
                                ]}
                                // onChange={handleCompany}
                                placeholder="--select agent--"
                                style={{
                                    width: "100%",
                                }}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Agent Code" name="agentcode">
                            <Input
                                name="agentcode"
                                placeholder="Enter Agent Code"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Select Company" name="companyname">
                            <Select
                                name="companyname"
                                options={[
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
                                        value: "Demo Branch",
                                        label: "Demo Branch",
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
                                        value: "Demo Account",
                                        label: "Demo Account",
                                    },
                                ]}
                                // onChange={handleCompany}
                                placeholder="--select acount--"
                                style={{
                                    width: "100%",
                                }}
                            />
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                        <Form.Item label="Category" name="billcategory">
                            <Select
                                name="billcategory"
                                options={[
                                    {
                                        value: "Demo Category",
                                        label: "Demo Category",
                                    },
                                ]}
                                // onChange={handleCompany}
                                placeholder="--Select Billing Category--"
                                style={{
                                    width: "100%",
                                }}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24}>
                        <Form.Item label="Details" name="details">
                            <TextArea
                                rows={3}
                                name="details"
                                placeholder="Enter Details"
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
        </>
    );
};

export default ReceiptsForm;
