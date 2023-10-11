import { Form, Input, Row, Col, Image, Button } from "antd";
const { TextArea } = Input;
import { Link } from "@inertiajs/react";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";
function PageAttachmentsForm({ setData, data, record }) {
    let thumbTxt = "Thumb";
    let thumb = "";
    if (record.thumb != null) {
        thumbTxt = "Replace Thumb";

        thumb = (
            <>
                <Image width={200} src={record.thumbPath} />{" "}
                <Link href={`/page/${record.id}/thumb`} method="post">
                    <Button shape="round" danger icon={<DeleteOutlined />}>
                        Delete
                    </Button>
                </Link>
            </>
        );
    }

    let imgTxt = "Image";
    let img = "";
    if (record.image != null) {
        imgTxt = "Replace Image";
        img = (
            <>
                <Image width={200} src={record.imagePath} />{" "}
                <Link href={`/page/${record.id}/image`} method="post">
                    <Button shape="round" danger icon={<DeleteOutlined />}>
                        Delete
                    </Button>
                </Link>
            </>
        );
    }

    let banTxt = "Banner";
    let ban = "";
    if (record.image != null) {
        banTxt = "Replace Banner";
        ban = (
            <>
                <Image width={200} src={record.bannerPath} />{" "}
                <Link href={`/page/${record.id}/banner`} method="post">
                    <Button shape="round" danger icon={<DeleteOutlined />}>
                        Delete
                    </Button>
                </Link>
            </>
        );
    }

    let a1Txt = "Attachment 1";
    let attach1 = "";
    if (record.attachment1 != null) {
        a1Txt = "Replace Attachment 1";
        attach1 = (
            <>
                <Link href={record.attachment1Path}>
                    {" "}
                    <Button shape="round" icon={<EyeOutlined />}>
                        {" "}
                        View Attachment{" "}
                    </Button>
                </Link>
                <Link href={`/page/${record.id}/attachment1`} method="post">
                    {" "}
                    <Button shape="round" danger icon={<DeleteOutlined />}>
                        Delete
                    </Button>
                </Link>
            </>
        );
    }

    let a2Txt = "Attachment 2";
    let attach2 = "";
    if (record.attachment2 != null) {
        a2Txt = "Replace Attachment 2";
        attach2 = (
            <>
                <Link href={record.attachment2Path}>
                    {" "}
                    <Button shape="round" icon={<EyeOutlined />}>
                        {" "}
                        View Attachment{" "}
                    </Button>
                </Link>
                <Link href={`/page/${record.id}/attachment2`} method="post">
                    {" "}
                    <Button shape="round" danger icon={<DeleteOutlined />}>
                        Delete
                    </Button>
                </Link>
            </>
        );
    }

    let a3Txt = "Attachment 3";
    let attach3 = "";
    if (record.attachment3 != null) {
        a3Txt = "Replace Attachment 2";
        attach3 = (
            <>
                <Link href={record.attachment3Path}>
                    {" "}
                    <Button shape="round" icon={<EyeOutlined />}>
                        {" "}
                        View Attachment{" "}
                    </Button>
                </Link>
                <Link href={`/page/${record.id}/attachment3`} method="post">
                    {" "}
                    <Button shape="round" danger icon={<DeleteOutlined />}>
                        Delete
                    </Button>
                </Link>
            </>
        );
    }

    return (
        <>
            <Row gutter={[8, 4]}>
                <Col xs={24} md={12}>
                    {thumb}
                    <Form.Item label={thumbTxt} name="thumb">
                        <Input
                            type="file"
                            onChange={(e) =>
                                setData("thumb", e.target.files[0])
                            }
                        />
                    </Form.Item>
                    {img}
                    <Form.Item label={imgTxt} name="image">
                        <Input
                            type="file"
                            onChange={(e) =>
                                setData("image", e.target.files[0])
                            }
                        />
                    </Form.Item>
                    {ban}
                    <Form.Item label={banTxt} name="banner">
                        <Input
                            type="file"
                            onChange={(e) =>
                                setData("banner", e.target.files[0])
                            }
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    {attach1}
                    <Form.Item label={a1Txt} name="attachment1">
                        <Input
                            type="file"
                            onChange={(e) =>
                                setData("attachment1", e.target.files[0])
                            }
                        />
                    </Form.Item>
                    {attach2}
                    <Form.Item label={a2Txt} name="attachment2">
                        <Input
                            type="file"
                            onChange={(e) =>
                                setData("attachment2", e.target.files[0])
                            }
                        />
                    </Form.Item>
                    {attach3}
                    <Form.Item label={a3Txt} name="attachment3">
                        <Input
                            type="file"
                            onChange={(e) =>
                                setData("attachment3", e.target.files[0])
                            }
                        />
                    </Form.Item>
                </Col>
            </Row>
        </>
    );
}

export default PageAttachmentsForm;
