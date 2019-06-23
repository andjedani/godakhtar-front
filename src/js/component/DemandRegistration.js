import React from "react";
import { Layout, Collapse, Icon } from "antd";
import SelectCustomer from "./SelectCustomer";
import AddProductTable from "./AddProductTable";

const Panel = Collapse.Panel;

class DemandRegistration extends React.Component {
  static displayName = "ثبت تقاضا";

  state = { inquiryId: null };

  selectInquiryId = inquiryId => {
    this.setState({ inquiryId });
  };

  render() {
    return (
      <Layout>
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => (
            <Icon type="caret-right" rotate={isActive ? 90 : 180} />
          )}
        >
          <Panel header={"تخصیص مشتری"} key="1">
            <SelectCustomer
              selectInquiryId={this.selectInquiryId}
              inquiry={this.props.inquiry}
            />
          </Panel>
          <Panel
            header="ثبت کد محصولات درخواستی"
            key="2"
            disabled={this.state.inquiryId == null}
          >
            <AddProductTable
              inquiryId={this.state.inquiryId}
              inquiry={this.props.inquiry}
            />
          </Panel>
        </Collapse>
      </Layout>
    );
  }
}

export default DemandRegistration;
