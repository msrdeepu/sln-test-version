
import {
    DatePicker,
    Button,
    Col,
    Row,
    Form,
    Input,
    Select,
} from "antd";

//custom css file
import "./property.css";
const { TextArea } = Input;
//rich text editor

function Propertyform({
    submitForm,
    setData,
    data,
    savebutton
}) {


    //individual select handlers
    const ventureHandler = (value) => {
        setData("venture", value)
    }
    const plotFacingHandler = (value) => {
        setData("plotfacing", value)
    }
    const statusHandler = (value) => {
        setData("status", value)
    }
    const customerHandler = (value) => {
        setData("customer", value)
    }
    const agentHandler = (value) => {
        setData("selectagent", value)
    }

    const dateHandler = (value) => {
        setData("dobooking", value)
    }
    //antd-form
    const [form] = Form.useForm();



    const afterSubmitHandler = () => {
        form.submit();
        form.setFieldsValue({
            code: "",
            venture: "",
            plotnum: "",
            title: "",
            location: "",
            villagearea: "",
            surveynum: "",
            plotfacing: "",
            northbound: "",
            southbound: "",
            eastbound: "",
            westbound: "",
            roadsize: "",
            customer: "",
            dispname: "",
            selectagent: "",
            agentcode: "",
            length: "",
            width: "",
            dimensions: "",
            tsqfeets: "",
            tsqyards: "",
            tankanams: "",
            ankanamcost: "",
            plotprice: "",
            discount: "",
            totalcost: "",
            dobooking: "",
            status: "",
            eachinstallment: "",
            totalinstallamount: "",
            approvauthority: "",
            address: "",
            stremarks: "",
        })

    }
    return (
        <>

            <Form
                layout="vertical"
                form={form}
                onFinish={submitForm}
                autoComplete="on"
                initialValues={{
                    code: data.code,
                    venture: data.venture,
                    plotnum: data.plotnum,
                    title: data.title,
                    location: data.location,
                    villagearea: data.villagearea,
                    surveynum: data.surveynum,
                    plotfacing: data.plotfacing,
                    northbound: data.northbound,
                    southbound: data.southbound,
                    eastbound: data.eastbound,
                    westbound: data.westbound,
                    roadsize: data.roadsize,
                    customer: data.customer,
                    dispname: data.dispname,
                    selectagent: data.selectagent,
                    agentcode: data.agentcode,
                    length: data.length,
                    width: data.width,
                    dimensions: data.dimensions,
                    tsqfeets: data.tsqfeets,
                    tsqyards: data.tsqyards,
                    tankanams: data.tankanams,
                    ankanamcost: data.ankanamcost,
                    plotprice: data.plotprice,
                    discount: data.discount,
                    totalcost: data.totalcost,
                    dobooking: data.dobooking,
                    status: data.status,
                    eachinstallment: data.eachinstallment,
                    totalinstallamount: data.totalinstallamount,
                    approvauthority: data.approvauthority,
                    address: data.address,
                    stremarks: data.stremarks
                }}
            >
                <Row gutter={[8, 3]}>
                    <Col xs={24} md={12}>
                        <Form.Item label="Code" name={"code"}
                            rules={[
                                {
                                    required: true,
                                    message: "Please Enter Code"
                                },
                            ]}
                        >
                            <Input name={"code"} placeholder="Enter Code" type="text" onChange={((e) => setData("code", e.target.value))} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Venture" name={"venture"} rules={[
                            {
                                required: true,
                                message: "lease Select Venture"
                            },
                        ]}>
                            <Select name={"venture"} onChange={ventureHandler}
                                defaultValue="---Select Venture---"
                                style={{
                                    width: "100%",
                                }}
                                options={[
                                    {
                                        value: "Demo",
                                        label: "Demo",
                                    },
                                ]}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Plot/Flat No#" name={"plotnum"}>
                            <Input name={"plotnum"} onChange={((e) => setData("plotnum", e.target.value))}
                                placeholder="Enter Plot No"
                                type="text"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Title" name={"title"}>
                            <Input name={"title"} onChange={((e) => setData("title", e.target.value))}
                                placeholder="Enter Property Name Here"
                                type="text"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Location" name={"location"}
                            rules={[
                                {
                                    required: true,
                                    message: "Please Enter Location"
                                },
                            ]}
                        >
                            <Input name={"location"} onChange={((e) => setData("location", e.target.value))}
                                placeholder="Enter Location Here"
                                type="text"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Village/Area" name={"villagearea"}>
                            <Input name={"villagearea"} onChange={((e) => setData("villagearea", e.target.value))}
                                placeholder="Enter village/area Name Here"
                                type="text"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Survey No#" name={"surveynum"}>
                            <Input name={"surveynum"} onChange={((e) => setData("surveynum", e.target.value))}
                                placeholder="Enter Survey Numbers here"
                                type="text"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Plot Facing" name={"plotfacing"} rules={[
                            {
                                required: true,
                                message: "Please Select Facing"
                            },
                        ]}>
                            <Select name={"plotfacing"} onChange={plotFacingHandler}
                                defaultValue="---Plot Facing---"
                                style={{
                                    width: "100%",
                                }}
                                options={[
                                    {
                                        value: "Demo",
                                        label: "Demo",
                                    },
                                ]}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24}>
                        <p>Property Boundaries</p>
                        <hr className="hr-ruler" />
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="North" name={"northbound"}>
                            <Input name={"northbound"} onChange={((e) => setData("northbound", e.target.value))}
                                placeholder="Enter Plot North Boundry"
                                type="text"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="South" name={"southbound"}>
                            <Input name={"southbound"} onChange={((e) => setData("southbound", e.target.value))}
                                placeholder="Enter Plot South Boundry"
                                type="text"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="East" name={"eastbound"}>
                            <Input name={"eastbound"} onChange={((e) => setData("eastbound", e.target.value))}
                                placeholder="Enter Plot East Boundry"
                                type="text"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="West" name={"westbound"}>
                            <Input name={"westbound"} onChange={((e) => setData("westbound", e.target.value))}
                                placeholder="Enter Plot West Boundry"
                                type="text"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24}>
                        <hr className="hr-ruler" />
                    </Col>

                    <Col xs={24} md={12}>
                        <Form.Item label="Road Size" name={"roadsize"}>
                            <Input name={"roadsize"} onChange={((e) => setData("roadsize", e.target.value))}
                                placeholder="Enter Road Size here"
                                type="text"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Customer" name={"customer"} rules={[
                            {
                                required: true,
                                message: "Please Select Customer"
                            },
                        ]}>
                            <Select name={"customer"} onChange={customerHandler}
                                defaultValue="---Select Customer---"
                                style={{
                                    width: "100%",
                                }}
                                options={[
                                    {
                                        value: "Demo",
                                        label: "Demo",
                                    },
                                ]}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Display Name" name={"dispname"}>
                            <Input name={"dispname"} onChange={((e) => setData("dispname", e.target.value))}
                                placeholder="Enter Display Name here"
                                type="text"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Agent" name={"selectagent"} rules={[
                            {
                                required: true,
                                message: "Please Select Agent"
                            },
                        ]}>
                            <Select name="selectagent" onChange={agentHandler}
                                defaultValue="---Select Agent---"
                                style={{
                                    width: "100%",
                                }}
                                options={[
                                    {
                                        value: "Demo",
                                        label: "Demo",
                                    },
                                ]}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Agent Code" name={"agentcode"}>
                            <Input name={"agentcode"} onChange={((e) => setData("agentcode", e.target.value))}
                                placeholder="Enter Agent Code here"
                                type="text"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Length" name={"length"}>
                            <Input name={"length"} onChange={((e) => setData("length", e.target.value))} placeholder="Enter Plot Length Feets here" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Width" name={"width"}>
                            <Input name={"width"} onChange={((e) => setData("width", e.target.value))} placeholder="Enter Plot Width Feets here" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Dimensions" name={"dimensions"}>
                            <Input name={"dimensions"} onChange={((e) => setData("dimensions", e.target.value))} placeholder="Enter Plot Dimensions Feets here" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Total Square Feets" name={"tsqfeets"}>
                            <Input name={"tsqfeets"} onChange={((e) => setData("tsqfeets", e.target.value))} placeholder="Enter Plot Area in Square Feets here" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Total Square Yards" name={"tsqyards"}>
                            <Input name={"tsqyards"} onChange={((e) => setData("tsqyards", e.target.value))} placeholder="Enter Plot Area in Square Yards here" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Total Ankanams" name={"tankanams"}>
                            <Input name={"tankanams"} onChange={((e) => setData("tankanams", e.target.value))} placeholder="Enter Plot Area in Ankanams here" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Ankanam Cost" name={"ankanamcost"}>
                            <Input name={"ankanamcost"} onChange={((e) => setData("ankanamcost", e.target.value))} placeholder="Enter Plot Area in Ankanams Cost here" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Plot Price" name={"plotprice"}>
                            <Input name={"plotprice"} onChange={((e) => setData("plotprice", e.target.value))} placeholder="Enter Plot Price Amount here" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Discount" name={"discount"}>
                            <Input name={"discount"} onChange={((e) => setData("discount", e.target.value))} placeholder="EnterOffer Price Amount here" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Total Cost" name={"totalcost"}>
                            <Input name={"totalcost"} onChange={((e) => setData("totalcost", e.target.value))} placeholder="Enter Total Plot Cost After Discount here" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Date of Booking" name={"dobooking"}>
                            <DatePicker name={"dobooking"} onChange={dateHandler}
                                style={{
                                    width: "100%",
                                }}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Status" name={"status"} rules={[
                            {
                                required: true,
                                message: "Please Select Status"
                            },
                        ]}>
                            <Select name={"status"} onChange={statusHandler}
                                defaultValue="---Available---"
                                style={{
                                    width: "100%",
                                }}
                                options={[
                                    {
                                        value: "Demo",
                                        label: "Demo",
                                    },
                                ]}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Installment" name={"eachinstallment"}>
                            <Input name={"eachinstallment"} onChange={((e) => setData("eachinstallment", e.target.value))} placeholder="Enter Each Installment Amount Here" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Installments" name={"totalinstallamount"}>
                            <Input name={"totalinstallamount"} onChange={((e) => setData("totalinstallamount", e.target.value))} placeholder="Enter Total Installments Here" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item name={"approvauthority"} label="Approval Authority">
                            <Input name={"approvauthority"} onChange={((e) => setData("approvauthority", e.target.value))} placeholder="Enter Approval Authority (Rera / DTCP / MP/ Panchayath ...) Here" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Address" name={"address"}>
                            <TextArea name={"address"} placeholder="Address" onChange={((e) => setData("address", e.target.value))} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Status Remarks" name={"stremarks"}>
                            <TextArea name={"stremarks"} onChange={((e) => setData("stremarks", e.target.value))} />
                        </Form.Item>
                    </Col>
                </Row>
                <div style={{ textAlign: "center" }}>0
                    <p>Note: Fields Marked with (<span style={{ color: "red" }}>*</span>) Astrik is Mandatory.</p>
                </div>
                <div className="btns-container">
                    <Button className="btn-item" type="primary" onClick={afterSubmitHandler}>
                        {savebutton}
                    </Button>
                    <Button className="btn-item" type="primary" danger>
                        Cancel
                    </Button>
                </div>
            </Form>

        </>
    );
}


export default Propertyform;
