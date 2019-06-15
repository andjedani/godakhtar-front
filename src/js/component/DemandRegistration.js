import React from "react";
import { Layout, Collapse, Icon } from "antd";
import SelectCustomer from "./SelectCustomer";
import AddProductTable from "./AddProductTable";

const Panel = Collapse.Panel;

class DemandRegistration extends React.Component {
  static displayName = "ثبت تقاضا";

  render() {
    return (
      <Layout>
        <Collapse
          defaultActiveKey={"2"}
          bordered={false}
          expandIcon={({ isActive }) => (
            <Icon type="caret-right" rotate={isActive ? 90 : 180} />
          )}
        >
          <Panel header={"تخصیص مشتری"} key="1">
            <SelectCustomer />
          </Panel>
          <Panel header="ثبت کد محصولات درخواستی" key="2">
            <AddProductTable />
          </Panel>
        </Collapse>
      </Layout>
    );
  }
}

export default DemandRegistration;
