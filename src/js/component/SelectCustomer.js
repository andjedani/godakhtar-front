import React from "react";
import { Radio, List, Button } from "antd";
import { readCustomer } from "../network/customer";
import { dashboardUrl, createInquiry } from "../network";

class SelectCustomer extends React.Component {
  state = {
    data: [],
    initloading: false,
    creatingInquiry: false,
    selectedCustomer: null,
    selectedInquiry: null
  };

  getData = async () => {
    this.setState({ initloading: true });
    let data = await readCustomer();
    if (data) data = data.data;
    else data = [];

    this.setState({ data, initloading: false });
  };

  createInquiryNetwork = async () => {
    this.setState({ creatingInquiry: true });

    let data = await createInquiry({
      customer: this.state.selectedCustomer.id
    });

    this.setState({ selectedInquiry: data.data.id, creatingInquiry: false });
    this.props.selectInquiryId(data.data.id);
  };

  onChangeCustomerSelect = e => {
    this.setState({
      selectedCustomer: e.target.value
    });
  };

  componentWillMount = () => {
    this.getData();
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
          onChange={this.onChangeCustomerSelect}
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
            dataSource={this.state.data}
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
