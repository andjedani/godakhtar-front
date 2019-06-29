import React from "react";
import { Layout, Card, Row, Col, Switch, Upload, Button, Icon } from "antd";

// TODO: connect this shit to server
const props = {
  // name: "file",
  // action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  // headers: {
  //   authorization: "authorization-text"
  // },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      console.log(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      console.log(`${info.file.name} file upload failed.`);
    }
  }
};

class TenderOfficePaper extends React.Component {
  state = {
    active: false
  };

  onChange = active => {
    this.setState({ active });
  };

  render() {
    return (
      <Layout>
        <Card>
          <Row>
            <Col span={8}>
              <Switch onChange={this.onChange} checked={this.state.active} />
              <span style={{ padding: 5 }}>نامه تهیه شده‌است</span>
            </Col>
            <Col span={16}>
              <Upload {...props} disabled={!this.state.active}>
                <Button disabled={!this.state.active}>
                  <Icon type="upload" /> افزودن فایل
                </Button>
              </Upload>
              ,
            </Col>
          </Row>
        </Card>
      </Layout>
    );
  }
}

export default TenderOfficePaper;
