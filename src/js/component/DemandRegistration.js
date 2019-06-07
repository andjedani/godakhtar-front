import React from "react";
import { Layout, Collapse, Icon, List, Radio } from "antd";
import { readCustomer } from "../network/customer";
import { dashboardUrl } from "../network";

const Panel = Collapse.Panel;

class DemandRegistration extends React.Component {
  static displayName = "ثبت تقاضا";
  state = { data: [], initloading: true, selectedCustomer: null };

  getData = async () => {
    this.setState({ initloading: true });
    let data = await readCustomer();
    if (data) data = data.data;
    else data = [];

    console.log(data);
    this.setState({ data, initloading: false });
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
    const selectedCustomer = this.state.selectedCustomer
      ? " > " + this.state.selectedCustomer.name + " انتخاب شده است."
      : "";
    return (
      <Layout>
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => (
            <Icon type="caret-right" rotate={isActive ? 90 : 180} />
          )}
        >
          <Panel header={"تخصیص مشتری" + selectedCustomer} key="1">
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
                footer={<div />}
                pagination={{
                  onChange: page => {
                    console.log(page);
                  },
                  pageSize: 10
                }}
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
          </Panel>
          <Panel header="ثبت کد محصولات درخواستی" key="2">
            <p />
          </Panel>
        </Collapse>
      </Layout>
    );
  }
}

export default DemandRegistration;
