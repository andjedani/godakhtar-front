import React from "react";

import { Steps, Layout } from "antd";
import CustomFooter from "./Footer";
import CustomHeader from "./Header";
import DemandRegistration from "./DemandRegistration";
import DemandReview from "./DemandReveiw";
import DemandDetailsReview from "./DemandDetailsReview";
import OtherDocumentsReview from "./OtherDocumentsReview";
import Pricing from "./Pricing";
import { getInquiryById } from "../network";

const { Step } = Steps;
const { Sider, Content } = Layout;

const list = [
  DemandRegistration,
  DemandReview,
  DemandDetailsReview,
  OtherDocumentsReview,
  Pricing
];

class ProcessForm extends React.Component {
  state = {
    current: 0
  };

  componentWillMount() {
    if (this.props.match.params.id) {
      this.getInquiry(this.props.match.params.id);
    }
  }

  getInquiry = async id => {
    console.log(id);
    let data = await getInquiryById(id);
    console.log(data.data);
    return data;
  };

  onChange = current => {
    this.setState({ current });
  };

  render() {
    const { current } = this.state;

    return (
      <Layout className="layout">
        <CustomHeader />
        <Layout style={{ padding: "50px" }}>
          <Sider style={{ padding: "50px" }}>
            <Steps
              direction="vertical"
              current={current}
              onChange={this.onChange}
            >
              {list.map(item => (
                <Step title={item.displayName} key={item} />
              ))}
            </Steps>
          </Sider>
          <Content style={{ paddingRight: "50px" }}>
            <Layout style={{ backgroundColor: "#fff", height: "100%" }}>
              {React.createElement(list[current])}
            </Layout>
          </Content>
        </Layout>
        <CustomFooter />
      </Layout>
    );
  }
}

export default ProcessForm;
