import { Form, Input,  Row, Col } from "antd";
const { TextArea } = Input;
function PageMetaForm({setData, data}) {




return (
        <>
<Row gutter={[8, 4]}>
<Col xs={24} md={12}>
    <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true }]}
    >
        <Input
            placeholder="Title Here..."
            onChange={(e) =>
                setData("title", e.target.value)
            }
        />
    </Form.Item>
</Col>

<Col xs={12}>
    <Form.Item
        label="SEO Page Title"
        name="seotitle"
        rules={[{ required: true }]}
    >
        <Input
            placeholder="seotitle..."
            onChange={(e) =>setData("seotitle", e.target.value)}
        />
    </Form.Item>
</Col>
</Row>
<Row gutter={[8, 4]}>
<Col xs={24} md={12}>
    <Form.Item label="SEO Description" name="seodesc">
        <TextArea rows={4}  onChange={(e) =>setData("seodesc", e.target.value)} />
    </Form.Item>
</Col>
<Col xs={24} md={12}>
    <Form.Item label="SEO Keywords"  name="seokeys"  onChange={(e) =>setData("seokeys", e.target.value)}>
        <TextArea rows={4} />
    </Form.Item>
</Col>
</Row>
</>
    );
}

export default PageMetaForm;
