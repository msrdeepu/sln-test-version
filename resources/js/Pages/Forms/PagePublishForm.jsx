import { Form, Input,  Row, Col, Select, DatePicker, Radio } from "antd";

import dayjs from 'dayjs';
const { TextArea } = Input;
function PagePublishForm({setData, data, scategory, sgroup, slayout, spublic, spublish, record}) {
    const dateFormat = 'YYYY-MM-DD';
    const handleSCat = (value) => {
        setData('category_id', value);
      };

      const handleSlayout = (value) => {
        setData('pagelayout', value);
      };

      const handleSgroup = (value) => {
        setData('group', value);
      };


      const handleSpublish = (value) => {
        setData('published', value);
      };

      const handleSaccess = (value) => {
        setData('contentaccess', value);
      };


      const handleScdate = (value) => {

        //console.log(`${value.format(dateFormat)}`);
        setData('createdate', `${value.format(dateFormat)}`);
      };


      const handleSexpdate = (value) => {
        setData('expdate', `${value.format(dateFormat)}`);
      };



return (
    <>
<Row gutter={[8, 4]}>
                                <Col xs={24} md={8}>
                                    <Form.Item
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Please Select Category",
                                            },
                                        ]}
                                        label="Category"
                                        name={"category_id"}
                                    >
                                        <Select
                                            defaultValue="Select Category"
                                            style={{
                                                width: "100%",
                                            }}
                                            options={scategory}
                                            onChange={handleSCat}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={8}>
                                    <Form.Item
                                        label="Select Group"
                                        name="group"

                                    >
                                        <Select
                                            defaultValue="Select Group"
                                            style={{
                                                width: "100%",
                                            }}
                                            options={sgroup}
                                            onChange={handleSgroup}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={8}>
                                    <Form.Item
                                        label="Select Layout"
                                        name={"pagelayout"}
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please Select Page Layout",
                                            },
                                        ]}
                                    >
                                        <Select
                                            defaultValue="Select Page Layout"
                                            style={{
                                                width: "100%",
                                            }}
                                            options={slayout}
                                            onChange={handleSlayout}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={[8, 4]}>
                                <Col xs={24} md={8}>
                                    <Form.Item
                                        label="Published"
                                        name="published"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Please Select Published State",
                                            },
                                        ]}
                                    >
                                        <Select
                                            defaultValue="Select Published State"
                                            style={{
                                                width: "100%",
                                            }}
                                            onChange={handleSpublish}
                                            options={spublish}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={8}>
                                    <Form.Item
                                        label="Content Access"
                                        name="contentaccess"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Please Select Content Access Level",
                                            },
                                        ]}
                                    >
                                        <Select
                                            defaultValue="Select Access Level"
                                            style={{
                                                width: "100%",
                                            }}
                                            options={spublic}
                                            onChange={handleSaccess}
                                        />
                                    </Form.Item>
                                </Col>


                                <Col xs={24} md={8}>
                                    <Form.Item
                                        label="Bulk Attachments"
                                        name="hasattachments" >

 <Radio.Group name="hasattachments"  defaultValue={record.hasattachments}  onChange={(e) =>setData("hasattachments", e.target.value)} >

    <Radio value="YES">YES</Radio>
    <Radio value="NO">NO</Radio>

  </Radio.Group>
                                    </Form.Item>
                                </Col>
                                </Row>
                                <Row gutter={[8, 8]}>
                                <Col xs={24} md={12}>
                                    <Form.Item label="Published On" name="createdate">

                                    {record.createdate !=null ?  <DatePicker defaultValue={dayjs(record.createdate, dateFormat)}  style={{ width: "100%" }} onChange={handleScdate}   format={dateFormat} /> : <DatePicker  style={{ width: "100%" }} onChange={handleScdate}   format={dateFormat} />}



                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={12}>
                                    <Form.Item>
                                        <Form.Item label="Expires On" name="expdate">
{record.expdate !=null ? <DatePicker  defaultValue={dayjs(record.expdate, dateFormat)}   style={{ width: "100%" }} onChange={handleSexpdate}  format={dateFormat} /> : <DatePicker   style={{ width: "100%" }} onChange={handleSexpdate}  format={dateFormat} />}


                                            </Form.Item>
                                    </Form.Item>
                                </Col>
                            </Row>

</>
        );
    }

export default PagePublishForm;
