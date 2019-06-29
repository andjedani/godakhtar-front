import React from "react";
import { Layout, Collapse, Icon } from "antd";
import ReleaseDate from "./ReleaseDate";

const Panel = Collapse.Panel;

class Pricing extends React.Component {
  static displayName = "قیمت‌دهی";

  render() {
    return (
      <Layout>
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => (
            <Icon type="caret-right" rotate={isActive ? 90 : 180} />
          )}
        >
          <Panel header="ارائه‌ی قیمت" key="1">
            <p>Hi</p>
          </Panel>
          <Panel header="زمان تحویل" key="2">
            <ReleaseDate />
          </Panel>
        </Collapse>
      </Layout>
    );
  }
}

export default Pricing;
