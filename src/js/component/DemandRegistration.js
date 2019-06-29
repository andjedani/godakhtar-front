import React from "react";
import { Layout, Collapse, Icon } from "antd";
import SelectCustomer from "./SelectCustomer";
import AddProductTable from "./AddProductTable";

const Panel = Collapse.Panel;

class DemandRegistration extends React.Component {
  static displayName = "ثبت تقاضا";

  state = { inquiry: null };

  selectInquiry = inquiry => {
    this.setState({ inquiry });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.inquiry !== this.props.inquiry && nextProps.inquiry) {
      this.setState({
        inquiry: nextProps.inquiry
      });
    }
  }

  render() {
    let selectCustomerHeader = "تخصیص مشتری";

    if (this.state.inquiry) {
      selectCustomerHeader =
        "مشتری انتخاب شده است: " + this.state.inquiry.customer.name;
    }

    return (
      <Layout>
        <Collapse
          accordion
          bordered={false}
          expandIconPosition="right"
          expandIcon={({ isActive }) => (
            <Icon type="caret-right" rotate={isActive ? 90 : 180} />
          )}
        >
          <Panel
            header={selectCustomerHeader}
            key="1"
            disabled={this.state.inquiry != null}
          >
            <SelectCustomer
              selectInquiry={this.selectInquiry}
              inquiry={this.state.inquiry}
            />
          </Panel>
          <Panel
            header="ثبت کد محصولات درخواستی"
            key="2"
            disabled={this.state.inquiry == null}
          >
            <AddProductTable inquiry={this.state.inquiry} />
          </Panel>
        </Collapse>
      </Layout>
    );
  }
}

export default DemandRegistration;
