import { useState, useRef } from "react";
import { Button, Form, Input, Select, Row, Col, Image } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Link, router } from "@inertiajs/react";

//jodit Editor for Rich editor
import JoditEditor from "jodit-react";

function CategoryForm({
    savebutton,
    sstatus,
    slayout,
    sparent,
    submitForm,
    setData,
    data,
}) {
    const { TextArea } = Input;
    const [value, setValue] = useState("");
    const [form] = Form.useForm();

    //jodit editor
    const editor = useRef(null);
    const [content, setContent] = useState("");

    //console.log(sstatus);
    const handleSChange = (value) => {
        setData("status", value);
    };

    const handlePChange = (value) => {
        setData("parent", value);
    };

    const handleLChange = (value) => {
        setData("layout", value);
    };

    const handelForm = () => {
        form.submit();
        form.setFieldsValue({
            cname: "",
            layout: "",
            slug: "",
            description: "",
            seotitle: "",
            keywords: "",
            status: "",
            parent: "",
        });
    };

    let thumbTxt = "Thumb";
    let thumb = "";
    if (data.thumb != null) {
        thumbTxt = "Replace Thumb";
        thumb = <Image width={200} src={data.thumbPath} />;
    }

    let imgTxt = "Image";
    let img = "";
    if (data.image != null) {
        imgTxt = "Replace Image";
        img = <Image width={200} src={data.imagePath} />;
    }

    let banTxt = "Banner";
    let ban = "";
    if (data.image != null) {
        banTxt = "Replace Banner";
        ban = <Image width={200} src={data.bannerPath} />;
    }

    return (
        <>
            <Form
                layout="vertical"
                form={form}
                onFinish={submitForm}
                initialValues={{
                    cname: data.cname,
                    slug: data.slug,
                    seotitle: data.seotitle,
                    description: data.description,
                    dorder: data.dorder,
                    status: data.status,
                    layout: data.layout,
                    parent: data.parent,
                    keywords: data.keywords,
                    body: data.body,
                }}
            >
                <Row gutter={[8, 4]}>
                    <Col xs={24} md={12}>
                        <Form.Item
                            label="Category Name"
                            name="cname"
                            rules={[{ required: true }]}
                        >
                            <Input
                                placeholder="Category Name here..."
                                onChange={(e) =>
                                    setData("cname", e.target.value)
                                }
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="SEO Page Tite" name="seotitle">
                            <Input
                                placeholder="Title..."
                                onChange={(e) =>
                                    setData("seotitle", e.target.value)
                                }
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={[8, 4]}>
                    <Col xs={24} md={12}>
                        <Form.Item label="SEO Description" name="description">
                            <TextArea
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                rows={4}
                                placeholder="Description here..."
                            />
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={12}>
                        <Form.Item label="SEO Keywords" name="keywords">
                            <TextArea
                                onChange={(e) =>
                                    setData("keywords", e.target.value)
                                }
                                rows={4}
                                placeholder="Keywords here..."
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[8, 4]}>
                    <Col xs={24} md={12}>
                        <Form.Item label="Parent Category" name={"parent"}>
                            <Select
                                placeholder="--- Select Parent ---"
                                options={sparent}
                                style={{ width: "100%" }}
                                onChange={handlePChange}
                            ></Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item
                            label="Page Layout"
                            name={"layout"}
                            rules={[{ required: true }]}
                        >
                            <Select
                                placeholder="--- Select Layout ---"
                                options={slayout}
                                style={{ width: "100%" }}
                                onChange={handleLChange}
                            ></Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[8, 4]}>
                    <Col xs={24} md={12}>
                        <Form.Item label="Display Order" name="dorder">
                            <Input
                                type="number"
                                placeholder="Order"
                                onChange={(e) =>
                                    setData("dorder", e.target.value)
                                }
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item
                            label="Status :"
                            name="status"
                            rules={[{ required: true }]}
                        >
                            <Select
                                placeholder="--- Select Status ---"
                                options={sstatus}
                                style={{ width: "100%" }}
                                onChange={handleSChange}
                            ></Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={[8, 4]}>
                    <Col xs={24} md={8}>
                        {thumb}
                    </Col>

                    <Col xs={24} md={8}>
                        {img}
                    </Col>
                    <Col xs={24} md={8}>
                        {ban}
                    </Col>
                </Row>

                <Row gutter={[8, 4]}>
                    <Col xs={24} md={8}>
                        <Form.Item label={thumbTxt} name={"thumb"}>
                            <Input
                                type="file"
                                onChange={(e) =>
                                    setData("thumb", e.target.files[0])
                                }
                            />
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={8}>
                        <Form.Item label={imgTxt} name={"image"}>
                            <Input
                                type="file"
                                onChange={(e) => setData("image", e.target.files[0])}
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={8}>
                        <Form.Item label={banTxt} name={"banner"}>
                            <Input
                                type="file"
                                onChange={(e) =>
                                    setData("banner", e.target.files[0])
                                }
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={[8, 4]}>
                    <Col xs={24}>
                        {/* JoditEditor */}
                        <JoditEditor
                            ref={editor}
                            value={data.body}
                            name="body"
                            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                            onChange={(newContent) =>
                                setData("body", newContent)
                            }
                        />
                    </Col>
                </Row>

                <Row gutter={[3, 3]} style={{ textAlign: "center" }}>
                    <Col xs={24} md={24}>

                  <div  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}>
 <Form.Item  style={{ margin: "8px" }}>
                            <Button type="primary" onClick={handelForm}>
                                {savebutton}
                            </Button>
                        </Form.Item>
                        <Form.Item  style={{ margin: "8px" }}>
                            <Link
                                href={window.route("category.index")}
                                type="button"
                            >
                                <Button danger> Cancle </Button>
                            </Link>
                        </Form.Item>
                                </div>


                    </Col>

                </Row>
            </Form>
        </>
    );
}

export default CategoryForm;
