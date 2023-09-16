import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link, router} from "@inertiajs/react";

import {
    Card,
Space,
    Button,
    Form,
    Input,
    Select,
    Row,
    Col,
    Typography,
    Divider,
    Image
} from "antd";
const { Title } = Typography;
const { TextArea } = Input;
const { Meta } = Card;

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function destroyRecord(e) {
    if (confirm("Are you sure you want to delete this record ?")) {
        router.delete(route("content.destroy", e.currentTarget.id));
    }
}





const BulkAttachmentview = ({record, satype, page, list}) => {

    const [form] = Form.useForm();
   // form.resetFields();
    const { data, setData, errors, post, get } = useForm();
     //delete Action
//Loading Edit View
function editRecord(e) {
    get(`/content/${e.currentTarget.id}/${page.id}/edit`);
}






    function handleSubmit(values) {
        // e.preventDefault();

    form.resetFields();
    post(`/content/${page.id}/store`, data,{forceFormData: true,});
        //console.log(e);
    }


    function handleUpdate(values) {
        // e.preventDefault();
        form.resetFields();
        post(`/content/${record.id}`, data,{forceFormData: true,});
        //console.log(e);
    }


      let pageTitle="";
      let action=handleSubmit;
      if(record.id == null){
          pageTitle=`Add Media Or Attachment For ${page.title}`;
      }
      else{
          action=handleUpdate;
          pageTitle=`Update Media Or Attachment For ${page.title}`;
      }

      const assetForm = () => {
        let gtitle="Upload Image";
        let ftitle="Upload File";
        let ytitle="You Tube Video ID";
        let img="";
        let link="";

        if(record.type!=undefined){
             gtitle="Replace Image";
            ftitle="Replace File";
            ytitle="Replace YouTube Video";
        }

        if(record.type=="FILE"){
            link=<a href={record.assetPath} target="blank"><Button>View Attachement</Button></a>
        }
        if(record.type=="GALLERY"){
            img=<Image src={record.assetPath} style={{maxWidth:100}} />
        }
        switch(data.type || record.type) {

          case "YOUTUBE":   return(<Form.Item label={ytitle} name="youtube"> <Input   onChange={(e) =>setData("youtube", e.target.value)} defaultValue={record.youtube} /> </Form.Item> );
          case "FILE":   return(<> <Form.Item label={ftitle} name="file"><Input type="file" onChange={(e) => setData("file", e.target.files[0])} /> </Form.Item> {link} </> );
          case "GALLERY":   return( <><Form.Item label={gtitle} name="gallery">  <Input type="file" onChange={(e) => setData("gallery", e.target.files[0])} /> </Form.Item>{img} </>);
          default:      return <h5>Select Attachment Type</h5>
        }
      }



      const onTypeChange = (value) => {
        setData('type', value);
      };

    return (
        <div>
            <Head title={`Bulk Attachments`} />

            <Card title={pageTitle}>
                <Form layout="vertical" form={form}  onFinish={action}  initialValues={{
        title:record.title || "",
        description:record.description || "",
        group:record.group || "",
        dorder:record.dorder || "",
        type:record.type || "",
        file:null,

    }} >
                <Row gutter={[8, 8]}>
                <Col xs={24} md={6}>

                            <Form.Item  label="Select Media Type" name="type" rules={[
                                            {
                                                required: true,
                                                message: "Please Select Media Type",
                                            },
                                        ]}>
                                <Select placeholder="Select Media Type" style={{  width: "100%", }} options={satype} onChange={onTypeChange}/>
                            </Form.Item>
                        </Col>
                        <Col>{assetForm()}</Col>
                        </Row>
                    <Row gutter={[8, 4]}>
                        <Col xs={24} md={16}>
                            <Form.Item label="Title" name="title" rules={[
                                            {
                                                required: true,
                                                message: "Please Enter Title",
                                            },
                                        ]}>
                                <Input placeholder="Enter Title..." onChange={(e) =>setData("title", e.target.value)} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={8}>
                            <Form.Item label="Display Order" name="dorder">
                                <Input type="number" placeholder="Enter Order" onChange={(e) =>setData("dorder", e.target.value)} />
                            </Form.Item>
                        </Col>
                        </Row>
                    <Row gutter={[8, 8]}>
                    <Col xs={24} md={16}>
                            <Form.Item label="Description" name="description" >
                                <TextArea style={{ width: "100%",  }} placeholder="Description Here..."  onChange={(e) =>setData("description", e.target.value)} defaultValue={record.description} />
                            </Form.Item>
                        </Col>

                        <Col xs={24} md={8}>
                            <Form.Item label="Group Name" name="group">
                                <Input placeholder="Enter Group Name" onChange={(e) =>setData("group", e.target.value)} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]}>
<Col xs={24} md={6} offset={8}>

                      <Space style={{marginTop:30}}>  <Button  htmlType="submit" type="primary" >  Save </Button>
                        <Link href="/page"> <Button danger> Cancel </Button></Link></Space>


                     </Col>
                    </Row>

                </Form>













                <Divider orientation="right">
                    <Title level={3}>Group Attachments </Title>
                </Divider>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        flexWrap: "wrap",
                    }}
                >



                {list.map(function(list, index){
if(list.type=="YOUTUBE"){
    return <Card  key={ index }  style={{ width: 240, margin:10 }} cover={<iframe width="100%" height="145" src={list.assetPath} title="YouTube video player" frameborder="0" allow="autoplay;" allowfullscreen></iframe>}>

    <Meta title={list.title} description={list.description} />
    <Space size="small" style={{marginTop:20}}><Button
                    shape="circle"
                    id={list.id}
                    onClick={editRecord}
                    icon={<EditOutlined />}
                /><Button
                    shape="circle"
                    id={list.id}
                    icon={<DeleteOutlined />}
                    onClick={destroyRecord}
                    danger
                /></Space>
  </Card>;
}

if(list.type=="GALLERY"){
    return    <Card  key={ index } hoverable style={{ width: 240, margin:10 }} cover={<Image alt={list.title} src={list.assetPath} />}>
    <Meta title={list.title} description={list.description} />
    <Space size="small" style={{marginTop:20}}><Button
                    shape="circle"
                    id={list.id}
                    onClick={editRecord}
                    icon={<EditOutlined />}
                /><Button
                    shape="circle"
                    id={list.id}
                    icon={<DeleteOutlined />}
                    onClick={destroyRecord}
                    danger
                /></Space>
  </Card>;
}

if(list.type=="FILE"){
    return    <Card  key={ index }  style={{ width: 240, margin:10}} >
        <h3>Download OR View File </h3> <a href={list.assetPath} target="blank">View Attached File</a>

        <Divider orientation="center">
                    <Title level={4}>{list.title} </Title>
                </Divider>

    <Meta description={list.description} />


    <Space size="small" style={{marginTop:20}}><Button
                    shape="circle"
                    id={list.id}
                    onClick={editRecord}
                    icon={<EditOutlined />}
                /><Button
                    shape="circle"
                    id={list.id}
                    icon={<DeleteOutlined />}
                    onClick={destroyRecord}
                    danger
                /></Space>
  </Card>;
}







                  })}




                </div>
            </Card>
        </div>
    );
};

BulkAttachmentview.layout = (page) => <AuthenticatedLayout children={page} />;

export default BulkAttachmentview;
