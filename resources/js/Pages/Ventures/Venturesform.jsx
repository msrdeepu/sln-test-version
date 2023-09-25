
// import { useForm, router } from "@inertiajs/react";
//custom css
import "./ventures.css";
import {
    Button,
    Col,
    Row,
    Form,
    Input,
    Select,
    Radio,
} from "antd";

import { useState, useRef } from "react";
const { TextArea } = Input;
//rich text editor
import JoditEditor from "jodit-react";

function Venturesform({
    submitForm,
    setData,
    data,
    savebutton, }) {
    const [form] = Form.useForm();


    const sStatusHandler = (value) => {
        setData("sstatus", value)
        //console.log(value)
    }

    const selectBranchHander = (value) => {
        setData("branch", value)
        //console.log(value)
    }

    const selectLayoutHander = (value) => {
        setData("layout", value)
        // console.log(value)
    }

    const salevelHandler = (value) => {
        setData("salevel", value)
        //console.log(value)
    }

    const otherDetailsHandler = (value) => {
        setData("otherdetails", value)
    }

    //clear the form
    const afterSubmitHandler = () => {
        form.submit();
        form.setFieldsValue({
            code: "",
            sstatus: "",
            title: "",
            templateslug: "",
            slug: "",
            mapheight: "",
            location: "",
            mapwidth: "",
            branch: "",
            salevel: "",
            locationimg: "",
            layout: "",
            layoutmap: "",
            pagetitleseo: "",
            banner: "",
            largemap: "",
            metadescription: "",
            metakeywords: "",
            address: "",
            published: "",
            mainbody: "",
            extrabody: "",
            bodystyles: "",
            otherdetails: "",
        })
    }
    const [value, setValue] = useState(1);
    const editor = useRef(null);
    const [content, setContent] = useState("");

    return (
        <>


            <Form
                layout="vertical"
                form={form}
                onFinish={submitForm}
                autoComplete="on"
                initialValues={{
                    code: data.code,
                    sstatus: data.sstatus,
                    title: data.title,
                    templateslug: data.templateslug,
                    slug: data.slug,
                    mapheight: data.mapheight,
                    location: data.location,
                    mapwidth: data.mapwidth,
                    branch: data.branch,
                    salevel: data.salevel,
                    locationimg: data.locationimg,
                    layout: data.layout,
                    layoutmap: data.layoutmap,
                    pagetitleseo: data.pagetitleseo,
                    banner: data.banner,
                    largemap: data.largemap,
                    metadescription: data.metadescription,
                    metakeywords: data.metakeywords,
                    address: data.address,
                    published: data.published,
                    mainbody: data.mainbody,
                    extrabody: data.extrabody,
                    bodystyles: data.bodystyles,
                    otherdetails: data.otherdetails
                }}
            >
                <Row gutter={[8, 4]}>
                    <Col xs={24} md={12}>
                        <Form.Item label="Code" name={"code"} rules={[
                            {
                                required: true,
                                message: 'Please Enter Code',
                            },
                        ]}>
                            <Input name={"code"}

                                type="text"
                                placeholder="Enter Code here"
                                onChange={((e) => setData("code", e.target.value))}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Staus" name={"sstatus"} rules={[
                            {
                                required: true,
                                message: 'Please Select Status',
                            },
                        ]}>
                            <Select name={"sstatus"}
                                placeholder="Select Status"
                                defaultValue="Select Status"
                                style={{
                                    width: "100%",
                                }}
                                onChange={sStatusHandler}
                                options={[
                                    {
                                        value: "Upcoming",
                                        label: "Upcoming",
                                    },
                                    {
                                        value: "Ongoing",
                                        label: "Ongoing",
                                    },
                                    {
                                        value: "Completed",
                                        label: "Completed",
                                    },
                                ]}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Title" name="title">
                            <Input name="title"
                                type="text"
                                placeholder="Enter Title here"
                                onChange={((e) => setData("title", e.target.value))}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Map Template URL" name={"templateslug"}>
                            <Input name={"templateslug"}
                                type="text"
                                placeholder="Map Template URL Here"
                                onChange={((e) => setData("templateslug", e.target.value))}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="URL/Slug" name={"slug"}>
                            <Input name={"slug"}
                                type="text"
                                placeholder="Enter URL here"
                                onChange={((e) => setData("slug", e.target.value))}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Map Height" name={"mapheight"}>
                            <Input name={"mapheight"}
                                type="text"
                                placeholder="Map Height here"
                                onChange={((e) => setData("mapheight", e.target.value))}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Location" name={"location"} rules={[
                            {
                                required: true,
                                message: 'Please Enter Location',
                            },
                        ]}>
                            <Input name={"location"}
                                type="text"
                                placeholder="Enter Location here"
                                onChange={(e) => setData("location", e.target.value)}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Map Width" name={"mapwidth"}>
                            <Input name={"mapwidth"}
                                type="text"
                                placeholder="Map Page Width here"
                                onChange={((e) => setData("mapwidth", e.target.value))}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Branch" name={"branch"} rules={[
                            {
                                required: true,
                                message: 'Please Select Branch',
                            },
                        ]}>
                            <Select name="branch"
                                defaultValue="Select Branch"
                                style={{
                                    width: "100%",
                                }}
                                onChange={selectBranchHander}
                                options={[
                                    {
                                        value: "Tirupati",
                                        label: "Tirupati",
                                    },
                                    {
                                        value: "Nellore",
                                        label: "Nellore",
                                    },
                                    {
                                        value: "Kavali",
                                        label: "Kavali",
                                    },
                                    {
                                        value: "Vinjamur",
                                        label: "Vinjamur",
                                    },
                                    {
                                        value: "Naidupet",
                                        label: "Naidupet",
                                    },
                                ]}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Select Access Level" name={"salevel"}>
                            <Select name="salevel"
                                defaultValue="Select Access Level"
                                style={{
                                    width: "100%",
                                }}
                                onChange={salevelHandler}
                                options={[
                                    {
                                        value: "Public",
                                        label: "Public",
                                    },
                                    {
                                        value: "Admin",
                                        label: "Admin",
                                    },
                                    {
                                        value: "Member",
                                        label: "Member",
                                    },
                                ]}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Location Image" name={"locationimg"}>
                            <input name={"locationimg"} className="input-item" type="file" onChange={((e) => setData("locationimg", e.target.value))} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Layout" name={"layout"} rules={[
                            {
                                required: true,
                                message: 'Please Select Layout',
                            },
                        ]}>
                            <Select name="layout"
                                defaultValue="Select Layout"
                                style={{
                                    width: "100%",
                                }}
                                onChange={selectLayoutHander}
                                options={[
                                    {
                                        value: "Tirupati",
                                        label: "Tirupati",
                                    },
                                    {
                                        value: "Nellore",
                                        label: "Nellore",
                                    },
                                    {
                                        value: "Kavali",
                                        label: "Kavali",
                                    },
                                    {
                                        value: "Vinjamur",
                                        label: "Vinjamur",
                                    },
                                    {
                                        value: "Naidupet",
                                        label: "Naidupet",
                                    },
                                ]}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Layout Map" name={"layoutmap"}>
                            <input name={"layoutmap"} className="input-item" type="file" onChange={((e) => setData("layoutmap", e.target.value))} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Page Title SEO" name={"pagetitleseo"} rules={[
                            {
                                required: true,
                                message: 'Please Enter Page SEO Title',
                            },
                        ]}>
                            <Input name={"pagetitleseo"}
                                type="text"
                                placeholder="Page SEO Title Here"
                                onChange={((e) => setData("pagetitleseo", e.target.value))}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Banner" name={"banner"}>
                            <input name={"banner"} className="input-item" type="file" onChange={((e) => setData("banner", e.target.value))} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Large Map" name={"largemap"}>
                            <input className="input-item" type="file" name={"largemap"} onChange={((e) => setData("largemap", e.target.value))} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Meta Description" name={"metadescription"}>
                            <TextArea name={"metadescription"}
                                className=""
                                placeholder="Meta Description"
                                onChange={((e) => setData("metadescription", e.target.value))}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Meta Keywords" name={"metakeywords"}>
                            <TextArea name={"metakeywords"}
                                className=""
                                placeholder="Meta Keywords"
                                onChange={((e) => setData("metakeywords", e.target.value))}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Address" name={"address"}>
                            <TextArea name={"address"} className="" placeholder="Address" onChange={((e) => setData("address", e.target.value))} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={8}>
                        <Form.Item
                            name={"published"}
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


                                name="published"
                                onChange={(e) =>
                                    setData("published", e.target.value)
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
                        <Form.Item label="Main Body" name={"mainbody"}>
                            <TextArea name={"mainbody"} rows={4} placeholder="Main Body" onChange={((e) => setData("mainbody", e.target.value))} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Extra Body" name={"extrabody"}>
                            <TextArea rows={4} placeholder="Extra Body" name={"extrabody"} onChange={((e) => setData("extrabody", e.target.value))} />
                        </Form.Item>
                    </Col>
                    <Col xs={24}>
                        <Form.Item label="Body Styles" name={"bodystyles"}>
                            <TextArea rows={4} placeholder="Body Styles" name={"bodystyles"} onChange={((e) => setData("bodystyles", e.target.value))} />
                        </Form.Item>
                    </Col>
                    <Col xs={24}>
                        <Form.Item label="Other Details" name={"otherdetails"}>
                            <JoditEditor
                                name="otherdetails"
                                ref={editor}
                                value={content}
                                tabIndex={1} // tabIndex of textarea
                                onBlur={(newContent) =>
                                    setContent(newContent)
                                } // preferred to use only this option to update the content for performance reasons
                                onChange={otherDetailsHandler}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <div style={{ textAlign: "center" }}>
                    <p>Note: Fields Marked with (<span style={{ color: "red" }}>*</span>) Astrik is Mandatory.</p>
                </div>
                <div className="btns-container">
                    <Button className="btn-item" onClick={afterSubmitHandler} type="primary">
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


export default Venturesform;
