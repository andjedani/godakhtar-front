import React from "react";
import { Layout, Card, Radio } from "antd";

const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px"
};

class CustomerPriorities extends React.Component {
  render() {
    return (
      <Layout>
        <Card>
          <Radio.Group>
            <Radio style={radioStyle} value={0}>
              کالای آماده تحویل
            </Radio>
            <Radio style={radioStyle} value={1}>
              ساخت
            </Radio>
            <Radio style={radioStyle} value={2}>
              تامین
            </Radio>
            <Radio style={radioStyle} value={3}>
              زمان تحویل کوتاه
            </Radio>
          </Radio.Group>
        </Card>
      </Layout>
    );
  }
}

export default CustomerPriorities;
