import React from "react";
import { Layout, Collapse, Icon, List } from "antd";

const Panel = Collapse.Panel;

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires."
];

class DemandRegistration extends React.Component {
  static displayName = "ثبت تقاضا";

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
              bordered
              dataSource={data}
              renderItem={item => (
                <List.Item
                  actions={[
                    <a
                      href="http://cuterhino.com/beta-version/customers/customer/5/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      بیشتر
                    </a>
                  ]}
                >
                  {item}
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
