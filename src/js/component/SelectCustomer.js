import React from "react";
import { Radio, List, Button } from "antd";
import { readCustomer } from "../network/customer";
import { dashboardUrl, createInquiry } from "../network";

class SelectCustomer extends React.Component {
  state = {
    customerList: [],
    initloading: false,
    creatingInquiry: false,
    selectedCustomer: null,
    selectedInquiry: null
  };

  createInquiryNetwork = async () => {
    this.setState({ creatingInquiry: true });

    let data = await createInquiry({
      customer_id: this.state.selectedCustomer.id
    });

    this.setState({ selectedInquiry: data.data, creatingInquiry: false });
    this.props.selectInquiry(data.data);
  };

  componentWillMount = async () => {
    this.setState({ initloading: true });
    let data = await readCustomer();
    if (data) data = data.data;
    else data = [];

    this.setState({ customerList: data, initloading: false });

    if (this.props.inquiry) {
      this.setState({
        selectedInquiry: this.props.inquiry.id,
        selectedCustomer: this.props.inquiry.customer
      });
    }
  };

  render() {
    let selectCustomerButton = this.state.selectedInquiry
      ? "مشتری انتخاب شده است"
      : "انتخاب مشتری";

    let customerHeader = this.state.selectedInquiry
      ? "مشتری انتخاب شده است: " + this.state.selectedCustomer.name
      : "مشتریان";

    return (
      <>
        <Radio.Group
          onChange={e => {
            this.setState({
              selectedCustomer: e.target.value
            });
          }}
          value={this.state.selectedCustomer}
          style={{ width: "100%" }}
        >
          <List
            header={
              <div>
                <b>{customerHeader}</b>
              </div>
            }
            footer={
              <Button
                type="primary"
                disabled={
                  this.state.selectedCustomer == null ||
                  this.state.selectedInquiry != null ||
                  this.state.creatingInquiry
                }
                loading={this.state.creatingInquiry}
                onClick={this.createInquiryNetwork}
              >
                {selectCustomerButton}
              </Button>
            }
            pagination={{ pageSize: 5 }}
            loading={this.state.initloading}
            bordered
            dataSource={this.state.customerList}
            renderItem={item => (
              <List.Item
                actions={[
                  <a
                    href={dashboardUrl + "customers/customer/" + item.id}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    بیشتر
                  </a>
                ]}
              >
                <List.Item.Meta
                  title={
                    <Radio
                      disabled={
                        this.state.selectedInquiry != null ||
                        this.state.creatingInquiry
                      }
                      value={item}
                    >
                      {item.name}
                    </Radio>
                  }
                />
              </List.Item>
            )}
          />
        </Radio.Group>
      </>
    );
  }
}

export default SelectCustomer;
