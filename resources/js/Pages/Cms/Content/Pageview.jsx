import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link } from "@inertiajs/react";
import { Card, Tabs, Button, Form, Typography } from "antd";
const { Paragraph } = Typography;


import {
    GlobalOutlined,
    AppstoreOutlined,
    SettingOutlined,
    PaperClipOutlined,
    InteractionOutlined,
} from "@ant-design/icons";

import PageMetaForm from "../../Forms/PageMetaForm";
import PageContentForm from "../../Forms/PageContentForm";
import PageAttachmentsForm from "../../Forms/PageAttachmentsForm";
import PageCtaForm from "../../Forms/PageCtaForm";
import PagePublishForm from "../../Forms/PagePublishForm";

function Pageview({
    sgroup,
    spublic,
    spublish,
    sptype,
    slayout,
    record,
    scategory,
}) {
    const { data, setData, errors, post } = useForm();

    // console.log(record);

    function handleSubmit(values) {
        // e.preventDefault();
        post(
            route("page.store", data, {
                forceFormData: true,
            })
        );
        //console.log(e);
    }

    function handleUpdate(values) {
        // e.preventDefault();
        post(`/page/${record.id}`, data, { forceFormData: true });
        //console.log(e);
    }

    const tabItems = [
        {
            key: "1",
            label: (
                <span>
                    <GlobalOutlined />
                    SEO Meta Data
                </span>
            ),
            children: (
                <PageMetaForm
                    setData={setData}
                    data={data}
                    record={record}
                />
            ),
        },
        {
            key: "2",
            label: (
                <span>
                    {" "}
                    <SettingOutlined />
                    Publish Settings{" "}
                </span>
            ),
            children: (
                <PagePublishForm
                    setData={setData}
                    data={data}
                    record={record}
                    sgroup={sgroup}
                    spublic={spublic}
                    spublish={spublish}
                    slayout={slayout}
                    scategory={scategory}
                />
            ),
        },
        {
            key: "3",
            label: (
                <span>
                    <AppstoreOutlined />
                    Page Content{" "}
                </span>
            ),
            children: (
                <PageContentForm
                    sptype={sptype}
                    setData={setData}
                    data={data}
                    record={record}
                />
            ),
        },

        {
            key: "4",
            label: (
                <span>
                    {" "}
                    <PaperClipOutlined />
                    Attachments{" "}
                </span>
            ),
            children: (
                <PageAttachmentsForm
                    setData={setData}
                    data={data}
                    record={record}
                />
            ),
        },
        {
            key: "5",
            label: (
                <span>
                    {" "}
                    <InteractionOutlined />
                    Call To Action{" "}
                </span>
            ),
            children: (
                <PageCtaForm
                    setData={setData}
                    data={data}
                    record={record}
                />
            ),
        },
    ];

    const [form] = Form.useForm();

    let pageTitle = "";
    let action = handleSubmit;
    if (record.id == null) {
        pageTitle = "Create New Content";
    } else {
        action = handleUpdate;
        pageTitle = "Update Content";
    }

    return (
        <div>
            <Head title={pageTitle} />

            <Card title={pageTitle}>
                <Form
                    layout="vertical"
                    form={form}
                    onFinish={action}
                    initialValues={{
                        title: record.title || "",
                        slug: record.slug || "",
                        seotitle: record.seotitle || "",
                        seodesc: record.seodesc || "",
                        seokeys: record.seokeys || "",
                        mainheader: record.mainheader || "",
                        pagetype: record.pagetype || "",
                        subheader: record.subheader || "",
                        linktext: record.linktext || "",
                        category_id: record.category_id || "",
                        group: record.group || "",
                        pagelayout: record.pagelayout || "",
                        published: record.published || "",
                        contentaccess: record.contentaccess || "",
                        intro: record.intro || "",
                        body: record.body || "",
                        mainbody: record.mainbody || "",
                        extrabody: record.extrabody || "",
                        optionalbody: record.optionalbody || "",
                        optionalextrabody: record.optionalextrabody || "",
                        richbody: record.richbody || "",
                        richextrabody: record.richextrabody || "",
                        hasattachments: record.hasattachments || "",
                        youtube: record.youtube || "",
                        ctaheader: record.ctaheader || "",
                        ctabody: record.ctabody || "",
                        ctatext: record.ctatext || "",
                        ctalink: record.ctalink || "",
                        image: null,
                        banner: null,
                        thumb: null,
                        attachment1: null,
                        attachment2: null,
                        attachment3: null,
                    }}
                >
                    <Tabs defaultActiveKey="1" items={tabItems}>
                        {" "}
                    </Tabs>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Form.Item>
                            <Paragraph>
                                Note: Fields Marked with (*) Astrik is
                                Mandatory.
                            </Paragraph>
                        </Form.Item>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Form.Item style={{ margin: "8px" }}>
                            <Button type="primary" htmlType="submit">
                                Save
                            </Button>
                        </Form.Item>
                        <Form.Item style={{ margin: "8px" }}>
                            <Link href="/page">
                                {" "}
                                <Button danger>Cancel</Button>
                            </Link>
                        </Form.Item>
                    </div>
                </Form>
            </Card>
        </div>
    );
}

Pageview.layout = (page) => <AuthenticatedLayout children={page} />;

export default Pageview;
