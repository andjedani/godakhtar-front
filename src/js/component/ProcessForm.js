import React from "react";

import { Steps, Layout } from "antd";

const { Step } = Steps;
const { Header, Footer, Sider, Content } = Layout;

class ProcessForm extends React.Component {
  state = {
    current: 0
  };

  onChange = current => {
    console.log("onChange:", current);
    this.setState({ current });
  };

  render() {
    const { current } = this.state;

    return (
      <Layout>
        <Header className="main-color-item palette-volcano-10">Header</Header>
        <Layout style={{ padding: "50px" }}>
          <Sider style={{ padding: "50px" }}>
            <Steps
              direction="vertical"
              current={current}
              onChange={this.onChange}
            >
              <Step title="ثبت تقاضا" />
              <Step title="بررسی اولیه تقاضا" />
              <Step title="بررسی جزئیات تقاضا" />
              <Step title="بررسی سایر مدارک" />
              <Step title="قیمت‌دهی" />
            </Steps>
          </Sider>
          <Content style={{ paddingRight: "50px" }}>
            <Layout style={{ backgroundColor: "#fff" }}>{current}</Layout>
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default ProcessForm;
