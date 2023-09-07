import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
//custom css
import "./ventures.css";
import {
    Card,
    Table,
    Typography,
    Button,
    Col,
    Row,
    Space,
    Form,
    Input,
    Select,
    Radio,
} from "antd";

import { useState, useRef, useMemo } from "react";
const { TextArea } = Input;
//rich text editor
import JoditEditor from "jodit-react";

function Venturescreate() {
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log("radio checked", e.target.value);
        setValue(e.target.value);
    };
    const editor = useRef(null);
    const [content, setContent] = useState("");

    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Venture Details`}>
                <Form layout="vertical">
                    <Row gutter={[8, 4]}>
                        <Col xs={24} md={12}>
                            <Form.Item label="Code">
                                <Input
                                    type="text"
                                    placeholder="Enter Code here"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Staus">
                                <Select
                                    defaultValue="Upcoming"
                                    style={{
                                        width: "100%",
                                    }}
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
                            <Form.Item label="Title">
                                <Input
                                    type="text"
                                    placeholder="Enter Title here"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Map Template URL">
                                <Input
                                    type="text"
                                    placeholder="Map Template URL Here"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="URL/Slug">
                                <Input
                                    type="text"
                                    placeholder="Enter URL here"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Map Height">
                                <Input
                                    type="text"
                                    placeholder="Map Height here"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Location">
                                <Input
                                    type="text"
                                    placeholder="Enter Location here"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Map Width">
                                <Input
                                    type="text"
                                    placeholder="Map Page Width here"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Branch">
                                <Select
                                    defaultValue="Tirupati"
                                    style={{
                                        width: "100%",
                                    }}
                                    options={[
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
                            <Form.Item label="Select Access Level">
                                <Select
                                    defaultValue="Select Access Level"
                                    style={{
                                        width: "100%",
                                    }}
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
                            <Form.Item label="Location Image">
                                <input className="input-item" type="file" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Layout">
                                <Select
                                    defaultValue="Demo"
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
                            <Form.Item label="Layout Map">
                                <input className="input-item" type="file" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Page Title SEO">
                                <Input
                                    type="text"
                                    placeholder="Page SEO Title Here"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Banner">
                                <input className="input-item" type="file" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Large Map">
                                <input className="input-item" type="file" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Meta Description">
                                <TextArea
                                    className=""
                                    placeholder="Meta Description"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Meta Keywords">
                                <TextArea
                                    className=""
                                    placeholder="Meta Keywords"
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Address">
                                <TextArea className="" placeholder="Address" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={8}>
                            <Form.Item
                                label="Published"
                                style={{
                                    width: "100%",
                                }}
                            >
                                <Radio.Group
                                    onChange={onChange}
                                    style={{
                                        display: "flex",
                                    }}
                                    value={value}
                                >
                                    <Radio value={1}>YES</Radio>
                                    <Radio value={2}>NO</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Main Body">
                                <TextArea rows={4} placeholder="Main Body" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label="Extra Body">
                                <TextArea rows={4} placeholder="Extra Body" />
                            </Form.Item>
                        </Col>
                        <Col xs={24}>
                            <Form.Item label="Body Styles">
                                <TextArea rows={4} placeholder="Body Styles" />
                            </Form.Item>
                        </Col>
                        <Col xs={24}>
                            <Form.Item label="Other Details">
                                <JoditEditor
                                    ref={editor}
                                    value={content}
                                    tabIndex={1} // tabIndex of textarea
                                    onBlur={(newContent) =>
                                        setContent(newContent)
                                    } // preferred to use only this option to update the content for performance reasons
                                    onChange={(newContent) => {}}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <div style={{ textAlign: "center" }}>
                        <p>Note: Fields Marked with (*) Astrik is Mandatory.</p>
                    </div>
                    <div className="btns-container">
                        <Button className="btn-item" type="primary">
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

Venturescreate.layout = (page) => <AuthenticatedLayout children={page} />;

export default Venturescreate;
