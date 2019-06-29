import React from "react";
import { Layout, Card, Col, Row } from "antd";

class CustomerPriorities extends React.Component {
  render() {
    return (
      <Layout>
        <Card>
          <Row gutter={16}>
            <Col span={12}>
              <Card
                title="کالای آماده‌ی تحویل"
                bordered={false}
                style={{ width: 300 }}
              />
            </Col>
            <Col span={12}>
              <Card title="ساخت" bordered={false} style={{ width: 300 }} />
            </Col>
          </Row>
          <br />
          <Row gutter={16}>
            <Col span={12}>
              <Card title="تامین" bordered={false} style={{ width: 300 }} />
            </Col>
            <Col span={12}>
              <Card
                title="زمان تحویل کوتاه"
                bordered={false}
                style={{ width: 300 }}
              />
            </Col>
          </Row>
        </Card>
      </Layout>
    );
  }
}

export default CustomerPriorities;
