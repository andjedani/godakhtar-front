import React from "react";
import { Layout, Card, Col, Row } from "antd";

class BusinessProperties extends React.Component {
  render() {
    return (
      <Layout>
        <Card>
          <Row gutter={16}>
            <Col span={12}>
              <Card
                title="شرایط پرداخت"
                bordered={false}
                style={{ width: 300 }}
              />
            </Col>
            <Col span={12}>
              <Card
                title="زمان تحویل"
                bordered={false}
                style={{ width: 300 }}
              />
            </Col>
          </Row>
          <br />
          <Row gutter={16}>
            <Col span={12}>
              <Card title="محل تحویل" bordered={false} style={{ width: 300 }} />
            </Col>
            <Col span={12}>
              <Card title="وندورلیست" bordered={false} style={{ width: 300 }} />
            </Col>
          </Row>
        </Card>
      </Layout>
    );
  }
}

export default BusinessProperties;
