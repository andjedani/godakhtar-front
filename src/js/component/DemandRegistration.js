import React from "react";
import { Layout, Collapse, Icon, List } from "antd";
import { readCustomer } from "../network/customer";
import { dashboardUrl } from "../network";

const Panel = Collapse.Panel;

class DemandRegistration extends React.Component {
  static displayName = "ثبت تقاضا";
  state = { data: [], initloading: true };

  getData = async () => {
    this.setState({ initloading: true });
    let data = await readCustomer();
    if (data) data = data.data;
    else data = [];

    console.log(data);
    this.setState({ data, initloading: false });
  };

  componentWillMount = () => {
    this.getData();
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
          <Panel header="تخصیص مشتری" key="1">
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
                  {item.name}
                </List.Item>
              )}
            />
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
