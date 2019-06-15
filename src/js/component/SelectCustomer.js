import React from "react";
import { Radio, List, Button } from "antd";
import { readCustomer } from "../network/customer";
import { dashboardUrl } from "../network";

class SelectCustomer extends React.Component {
  state = {
    data: [],
    initloading: false,
    creatingInquery: false,
    selectedCustomer: null
  };

  getData = async () => {
    this.setState({ initloading: true });
    let data = await readCustomer();
    if (data) data = data.data;
    else data = [];

    this.setState({ data, initloading: false });
  };

  createInquery = async () => {
    this.setState({ creatingInquery: true });

    this.setState({ creatingInquery: false });
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
                <b>مشتریان</b>
              </div>
            }
            footer={
              <div>
                <Button
                  type="primary"
                  disabled={this.state.selectedCustomer == null}
                  loading={this.state.creatingInquery}
                  onClick={this.createInquery}
                >
                  انتخاب مشتری
                </Button>
              </div>
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
                  title={<Radio value={item}>{item.name}</Radio>}
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
