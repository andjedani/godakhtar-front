import React from "react";
import { Layout, Card, Radio } from "antd";

const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px"
};

class TechnologyLevel extends React.Component {
  render() {
    return (
      <Layout>
        <Card>
          <Radio.Group>
            <Radio style={radioStyle} value={0}>
              Low Tech
            </Radio>
            <Radio style={radioStyle} value={1}>
              Mid Tech
            </Radio>
            <Radio style={radioStyle} value={2}>
              High Tech
            </Radio>
          </Radio.Group>
        </Card>
      </Layout>
    );
  }
}

export default TechnologyLevel;
