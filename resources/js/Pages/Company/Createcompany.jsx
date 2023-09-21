import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, router } from "@inertiajs/react";
import {
    Card,
    Form,
    Input,
    Radio,
    Row,
    Col,
    message,
    Button,
} from "antd";
const { TextArea } = Input;

function Createcompany({ props, record }) {

    //useForm
    const { submit, data, setData, post, patch, processing, errors, reset } = useForm({
        companyname: record.companyname,
        domain: record.domain,
        gstax: record.gstax,
        pan: record.pan,
        upiId: record.upiid,
        email: record.email,
        phonenum: record.phonenum,
        mobilenum: record.mobilenum,
        websiteslug: record.websiteslug,
        logo: record.logo,
        qrcode: record.qrcode,
        astatus: record.astatus,
        address: record.address,
        bankdetails: record.bankdetails,
        terms: record.terms,
        note: record.note,
        footer: record.footer
    })
    //clear form
    const [messageApi, contextHolder] = message.useMessage();
    const key = 'updatable';
    const afterSubmitForm = () => {
        form.submit();
        form.setFieldsValue({
            companyname: "",
            domain: "",
            gstax: "",
            pan: "",
            upiId: "",
            email: "",
            phonenum: "",
            mobilenum: "",
            websiteslug: "",
            logo: "",
            qrcode: "",
            astatus: "",
            address: "",
            bankdetails: "",
            terms: "",
            note: "",
            footer: "",
        })
        messageApi.open({
            key,
            type: 'loading',
            content: 'Loading...',
        });
        setTimeout(() => {
            messageApi.open({
                key,
                type: 'success',
                content: 'New Company Added Succesfully',
                duration: 2,
            });
        }, 1000);
    };
    //antd-form
    const [form] = Form.useForm();

    function submitHandler(e) {
        // e.preventDefault()
        post(
            route("company.store", data, {
                forceFormData: true,
            })
        );
    }
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Company Details`}>
                <Form layout="vertical" method="post"
                    onFinish={submitHandler}
                    form={form}>
                    <Row gutter={[8, 4]}>
                        <Col xs={24} md={12}>
                            <Form.Item label="Company Name"
                                name={'companyname'}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Enter Company Name',
                                    },
                                ]}>
                                <Input
                                    name="companyname"
                                    type="text"
                                    placeholder="Enter Company Name Here"
                                    onChange={(e) =>
                                        setData("companyname", e.target.value)
                                    }
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Domain Name"
                                name={'domain'}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Enter Domain name',
                                    },
                                ]}
                            >
                                <Input
                                    type="text"
                                    name="domain"
                                    placeholder="Enter Domain Name Here"
                                    onChange={(e) =>
                                        setData("domain", e.target.value)
                                    }
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="GST/TAX NO:" name="gstax">
                                <Input type="text" placeholder="GST/Tax No"
                                    name="gstax"
                                    onChange={(e) =>
                                        setData("gstax", e.target.value)
                                    } />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="PAN NO" name="pan">
                                <Input type="text" placeholder="PAN NO"
                                    name="pan"
                                    onChange={(e) =>
                                        setData("pan", e.target.value)
                                    }
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="UPI ID" name="upiId">
                                <Input type="text" placeholder="UPI ID"
                                    name="upiId"
                                    onChange={(e) =>
                                        setData("upiId", e.target.value)
                                    } />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Email Address" name="email">
                                <Input
                                    name="email"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    type="text"
                                    placeholder="Enter Email Address Here"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Phone Number" name="phonenum">
                                <Input
                                    name="phonenum"
                                    onChange={(e) =>
                                        setData("phonenum", e.target.value)
                                    }
                                    type="text"
                                    placeholder="Enter Phone Number Here"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Mobile Number" name="mobilenum">
                                <Input
                                    name="mobilenum"
                                    onChange={(e) =>
                                        setData("mobilenum", e.target.value)
                                    }
                                    type="text"
                                    placeholder="Enter Mobile Number Here"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Website URL" name="websiteslug">
                                <Input
                                    name="websiteslug"
                                    onChange={(e) =>
                                        setData("websiteslug", e.target.value)
                                    }
                                    type="text"
                                    placeholder="Enter Website URL Here"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="LOGO" name="logo">
                                <input name="logo"
                                    onChange={(e) =>
                                        setData("logo", e.target.value)
                                    }
                                    className="input-item" type="file" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="QR Code" name="qrcode">
                                <input
                                    name="qrcode"
                                    onChange={(e) =>
                                        setData("qrcode", e.target.value)
                                    }
                                    className="input-item" type="file" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                name={"astatus"}
                                label="Status - Account Status is Active or Not"
                                style={{
                                    width: "100%",
                                }}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Select Status',
                                    },
                                ]}
                            >
                                <Radio.Group


                                    name="astatus"
                                    onChange={(e) =>
                                        setData("astatus", e.target.value)
                                    }
                                    style={{
                                        display: "flex",
                                    }}
                                >
                                    <Radio value={"YES"}>YES</Radio>
                                    <Radio value={"NO"}>NO</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Address" name="address">
                                <TextArea name="address" onChange={(e) =>
                                    setData("address", e.target.value)
                                } placeholder="Enter Your Address here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Bank Details" name="bankdetails">
                                <TextArea name="bankdetails" onChange={(e) =>
                                    setData("bankdetails", e.target.value)
                                } placeholder="Enter Your Bank Details Here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Terms" name="terms">
                                <TextArea name="terms" onChange={(e) =>
                                    setData("terms", e.target.value)
                                } placeholder="Enter Your Terms Here" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Note" name="note">
                                <TextArea name="note" onChange={(e) =>
                                    setData("note", e.target.value)
                                } placeholder="Note Points" />
                            </Form.Item>
                        </Col>
                        <Col xs={24}>
                            <Form.Item label="Footer" name="footer">
                                <TextArea name="footer" onChange={(e) =>
                                    setData("footer", e.target.value)
                                } placeholder="Footer Here" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <div style={{ textAlign: "center" }}>
                        <p>Note: Fields Marked with (*) Astrik is Mandatory.</p>
                    </div>
                    <div className="btns-container">
                        <Button htmlType="submit" onClick={afterSubmitForm} className="btn-item" type="primary">
                            Save
                        </Button>
                        <Button className="btn-item" type="primary" danger>
                            Cancel
                        </Button>
                    </div>
                </Form>
            </Card>
        </>
    );
}

Createcompany.layout = (page) => <AuthenticatedLayout children={page} />;

export default Createcompany;
