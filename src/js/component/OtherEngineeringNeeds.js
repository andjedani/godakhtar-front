import React from "react";
import { Layout, Card, Row, Col, Input } from "antd";

class OtherEngineeringNeeds extends React.Component {
  render() {
    return (
      <Layout>
        <Card>
          <Row>
            <Col span={12}>
              <Input addonBefore="سایر الزامات مهندسی" />
            </Col>
          </Row>
        </Card>
      </Layout>
    );
  }
}

export default OtherEngineeringNeeds;
