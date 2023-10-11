import { Form, Input, Row, Col } from "antd";
const { TextArea } = Input;
function PageCtaForm({ setData, data }) {
    return (
        <>
            <Row gutter={[8, 4]}>
                <Col xs={24} md={12}>
                    <Form.Item label="Header" name="ctaheader">
                        <TextArea
                            rows={4}
                            onChange={(e) =>
                                setData("ctaheader", e.target.value)
                            }
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Body" name="ctabody">
                        <TextArea
                            rows={4}
                            onChange={(e) => setData("ctabody", e.target.value)}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Text" name="ctatext">
                        <Input
                            onChange={(e) => setData("ctatext", e.target.value)}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Link URL" name="ctalink">
                        <Input
                            onChange={(e) => setData("ctalink", e.target.value)}
                        />
                    </Form.Item>
                </Col>
            </Row>
        </>
    );
}

export default PageCtaForm;
