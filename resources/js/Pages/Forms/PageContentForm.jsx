import { Form, Input, Row, Col, Select } from "antd";
import { useState, useRef } from "react";

const { TextArea } = Input;

//jodit Editor for Rich editor
import JoditEditor from "jodit-react";
function PageContentForm({ setData, data, sptype, record }) {


    //jodit editor
    const editor = useRef(null);
    const [content, setContent] = useState("");

    const onPageChange = (value) => {
        //console.log(value);
        setData('pagetype', value);

    };



    const pageForm = () => {
        switch (data.pagetype || record.pagetype) {

            case "VIDEO": return (<><Row gutter={[10, 10]}><Col xs={24} md={24}><Form.Item label="Intro" name="intro">  <TextArea onChange={(e) => setData("intro", e.target.value)} defaultValue={record.intro} /> </Form.Item> </Col></Row><Row><Col xs={24} md={24}><Form.Item label="You Tube Video ID" name="youtube">  <Input onChange={(e) => setData("youtube", e.target.value)} defaultValue={record.youtube} /> </Form.Item> </Col></Row><Row gutter={[10, 10]}> <Col xs={24}><JoditEditor
                ref={editor}
                value={record.richbody}
                name="richbody"
                onBlur={(newContent) => setContent(newContent)}
                onChange={(newContent) =>
                    setData("richbody", newContent)
                }

            />
            </Col></Row></>);
            case "COMPLEX": return (<><Row gutter={[10, 10]}><Col xs={24} md={12}><Form.Item label="Main Body" name="mainbody">  <TextArea onChange={(e) => setData("mainbody", e.target.value)} defaultValue={record.mainbody} /> </Form.Item> </Col><Col xs={24} md={12}><Form.Item label="Extra Body" name="extrabody">  <TextArea onChange={(e) => setData("extrabody", e.target.value)} defaultValue={record.extrabody} /> </Form.Item> </Col><Col xs={24} md={24}><Form.Item label="Page Body" name="body">  <TextArea onChange={(e) => setData("body", e.target.value)} defaultValue={record.body} /> </Form.Item> </Col><Col xs={24} md={12}><Form.Item label="Optional Body" name="optionalbody">  <TextArea onChange={(e) => setData("optionalbody", e.target.value)} defaultValue={record.optionalbody} /> </Form.Item> </Col><Col xs={24} md={12}><Form.Item label="Optional Extra Body" name="optionalextrabody">  <TextArea onChange={(e) => setData("optionalextrabody", e.target.value)} defaultValue={record.optionalextrabody} /> </Form.Item> </Col></Row></>);
            case "HOME": return (<><Row gutter={[10, 10]}><Col xs={24} md={12}><Form.Item label="Main Body" name="mainbody">  <TextArea onChange={(e) => setData("mainbody", e.target.value)} defaultValue={record.mainbody} /> </Form.Item> </Col><Col xs={24} md={12}><Form.Item label="Extra Body" name="extrabody">  <TextArea onChange={(e) => setData("extrabody", e.target.value)} defaultValue={record.extrabody} /> </Form.Item> </Col><Col xs={24} md={24}><Form.Item label="Page Body" name="body">  <TextArea onChange={(e) => setData("body", e.target.value)} defaultValue={record.body} /> </Form.Item> </Col><Col xs={24} md={12}><Form.Item label="Optional Body" name="optionalbody">  <TextArea onChange={(e) => setData("optionalbody", e.target.value)} defaultValue={record.optionalbody} /> </Form.Item> </Col><Col xs={24} md={12}><Form.Item label="Optional Extra Body" name="optionalextrabody">  <TextArea onChange={(e) => setData("optionalextrabody", e.target.value)} defaultValue={record.optionalextrabody} /> </Form.Item> </Col></Row></>);
            case "PAGE": return (<><Row gutter={[10, 10]}><Col xs={24} md={12}><Form.Item label="Main Body" name="mainbody" >  <TextArea onChange={(e) => setData("mainbody", e.target.value)} defaultValue={record.mainbody} /> </Form.Item> </Col><Col xs={24} md={12}><Form.Item label="Extra Body" name="extrabody" >  <TextArea onChange={(e) => setData("extrabody", e.target.value)} defaultValue={record.extrabody} /> </Form.Item> </Col><Col xs={24} md={24}><Form.Item label="Page Body" name="body" >  <TextArea onChange={(e) => setData("body", e.target.value)} defaultValue={record.body} /> </Form.Item> </Col></Row></>);
            case "NEWS": return (<><Row gutter={[10, 10]}><Col xs={24} md={24}><Form.Item label="Intro" name="intro">  <TextArea onChange={(e) => setData("intro", e.target.value)} defaultValue={record.intro} /> </Form.Item> </Col></Row> <Row gutter={[10, 10]}> <Col xs={24}><JoditEditor
                ref={editor}
                value={record.richbody}
                name="richbody"
                onBlur={(newContent) => setContent(newContent)}
                onChange={(newContent) =>
                    setData("richbody", newContent)
                }


            />
            </Col></Row><Row gutter={[10, 10]}> <Col xs={24}>
                <JoditEditor
                    ref={editor}
                    value={record.richextrabody}
                    name="richextrabody"
                    onBlur={(newContent) => setContent(newContent)}
                    onChange={(newContent) =>
                        setData("richextrabody", newContent)
                    }


                />
            </Col></Row></>);

            case "EVENT": return (<><Row gutter={[10, 10]}><Col xs={24} md={24}><Form.Item label="Intro" name="intro">  <TextArea onChange={(e) => setData("intro", e.target.value)} defaultValue={record.intro} /> </Form.Item> </Col></Row> <Row gutter={[10, 10]}> <Col xs={24}><JoditEditor
                ref={editor}
                value={record.richbody}
                name="richbody"
                onBlur={(newContent) => setContent(newContent)}
                onChange={(newContent) =>
                    setData("richbody", newContent)
                }

            />
            </Col></Row><Row gutter={[10, 10]}> <Col xs={24}>
                <JoditEditor
                    ref={editor}
                    value={record.richextrabody}
                    name="richextrabody"
                    onBlur={(newContent) => setContent(newContent)}
                    onChange={(newContent) =>
                        setData("richextrabody", newContent)
                    }


                />
            </Col></Row></>);


            case "GALLERY": return (<><Row gutter={[10, 10]}><Col xs={24} md={24}><Form.Item label="Intro" name="intro">  <TextArea onChange={(e) => setData("intro", e.target.value)} defaultValue={record.intro} /> </Form.Item> </Col></Row> <Row gutter={[10, 10]}> <Col xs={24}><JoditEditor
                ref={editor}
                value={record.richbody}
                name="richbody"
                onBlur={(newContent) => setContent(newContent)}
                onChange={(newContent) =>
                    setData("richbody", newContent)
                }


            />
            </Col></Row><Row gutter={[10, 10]}> <Col xs={24}>
                <JoditEditor
                    ref={editor}
                    value={record.richextrabody}
                    name="richextrabody"
                    onBlur={(newContent) => setContent(newContent)}
                    onChange={(newContent) =>
                        setData("richextrabody", newContent)
                    }


                />
            </Col></Row></>);



            case "BLOG": return (<> <Row gutter={[10, 10]}><Col xs={24} md={24}><Form.Item label="Intro" name="intro">  <TextArea onChange={(e) => setData("intro", e.target.value)} defaultValue={record.intro} /> </Form.Item> </Col></Row><Row gutter={[10, 10]}> <Col xs={24}><JoditEditor
                ref={editor}
                value={record.richbody}
                name="richbody"
                onBlur={(newContent) => setContent(newContent)}
                onChange={(newContent) =>
                    setData("richbody", newContent)
                }

            />
            </Col></Row></>);


            case "ARTICLE": return (<><Row gutter={[10, 10]}><Col xs={24} md={24}><Form.Item label="Intro" name="intro">  <TextArea onChange={(e) => setData("intro", e.target.value)} defaultValue={record.intro} /> </Form.Item> </Col></Row> <Row gutter={[10, 10]}> <Col xs={24}><JoditEditor
                ref={editor}
                value={record.richbody}
                name="richbody"
                onBlur={(newContent) => setContent(newContent)}
                onChange={(newContent) =>
                    setData("richbody", newContent)
                }

            />
            </Col></Row></>);


            case "PRODUCT": return (<> <Row gutter={[10, 10]}><Col xs={24} md={24}><Form.Item label="Intro" name="intro" >  <TextArea onChange={(e) => setData("intro", e.target.value)} defaultValue={record.intro} /> </Form.Item> </Col></Row><Row gutter={[10, 10]}><Col xs={24} md={24}><Form.Item label="Main Body" name="mainbody">  <TextArea onChange={(e) => setData("mainbody", e.target.value)} defaultValue={record.mainbody} /> </Form.Item> </Col></Row><Row gutter={[10, 10]}> <Col xs={24}><JoditEditor
                ref={editor}
                value={record.richbody}
                name="richbody"
                onBlur={(newContent) => setContent(newContent)}
                onChange={(newContent) =>
                    setData("richbody", newContent)
                }


            />
            </Col></Row></>);

            default: return <h5>Select Page Type</h5>
        }
    }







    return (
        <>

            <Row gutter={[8, 4]}>
                <Col xs={24} md={12}>
                    <Form.Item
                        rules={[
                            {
                                required: true,
                                message:
                                    "Please Enter Main Header",
                            },
                        ]}
                        label="Main Header"
                        name="mainheader"
                    >
                        <Input
                            placeholder="Main Header..."
                            onChange={(e) => setData("mainheader", e.target.value)}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item
                        label="Sub Header"
                        name={"subheader"}
                    >
                        <Input
                            placeholder="Sub Header"
                            onChange={(e) => setData("subheader", e.target.value)}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item
                        rules={[
                            {
                                required: true,
                                message:
                                    "Please Select Page Type",
                            },
                        ]}
                        label="Page Type"
                        name="pagetype"
                    >
                        <Select
                            defaultValue="Select Page Type"
                            style={{
                                width: "100%",
                            }}
                            onChange={onPageChange}
                            options={sptype}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Link Text" name="linktext">
                        <Input placeholder="Read More / Learn More" onChange={(e) => setData("linktext", e.target.value)} />
                    </Form.Item>
                </Col>



            </Row>
            {pageForm()}

        </>
    );
}

export default PageContentForm;
