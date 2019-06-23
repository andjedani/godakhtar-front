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
import { copyObject } from "../utility/object";

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
    current: 0,
    stepProps: [{}, {}, {}, {}, {}]
  };

  componentDidMount = async () => {
    if (this.props.match.params.id) {
      let data = await getInquiryById(this.props.match.params.id);
      if (data) {
        data = data.data;

        let tmpList = copyObject(this.state.stepProps);

        tmpList[0] = {
          inquiry: data
        };

        this.setState({ stepProps: tmpList });
      }
    }
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
              onChange={current => {
                this.setState({ current });
              }}
            >
              {list.map(item => (
                <Step title={item.displayName} key={item} />
              ))}
            </Steps>
          </Sider>
          <Content style={{ paddingRight: "50px" }}>
            <Layout style={{ backgroundColor: "#fff", height: "100%" }}>
              {React.createElement(
                list[current],
                this.state.stepProps[current]
              )}
            </Layout>
          </Content>
        </Layout>
        <CustomFooter />
      </Layout>
    );
  }
}

export default ProcessForm;
