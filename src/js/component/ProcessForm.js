import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
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
    const element = (
      <FontAwesomeIcon
        icon={faCoffee}
        style={{
          marginLeft: "5px",
          marginRight: "5px",
          color: "#279faf"
        }}
      />
    );

    return (
      <Layout>
        <Header className="main-color-item palette-volcano-10" />
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
            <Layout style={{ backgroundColor: "#fff", height: "100%" }}>
              {current}
            </Layout>
          </Content>
        </Layout>
        <Footer>
          طراحی و توسعه با {element}
          در گراف
        </Footer>
      </Layout>
    );
  }
}

export default ProcessForm;
