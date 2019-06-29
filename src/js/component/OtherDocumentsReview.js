import React from "react";
import { Layout, Collapse, Icon } from "antd";
import TechnologyLevel from "./TechnologyLevel";
import OtherEngineeringNeeds from "./OtherEngineeringNeeds";
import CheckTenderOfficePaper from "./CheckTenderOfficePaper";

const Panel = Collapse.Panel;

class OtherDocumentsReview extends React.Component {
  static displayName = "بررسی سایر مدارک";

  render() {
    return (
      <Layout>
        <Collapse
          accordion
          bordered={false}
          expandIconPosition="right"
          expandIcon={({ isActive }) => (
            <Icon type="caret-right" rotate={isActive ? 90 : 180} />
          )}
        >
          <Panel header="تکمیل مشخصات هر کد محصول مطابق با مدارک پروژه" key="1">
            <p>Hi</p>
          </Panel>
          <Panel header="سطح تکنولوژی تقاضا" key="2">
            <TechnologyLevel />
          </Panel>
          <Panel header="درج سایر الزامات مهندسی" key="3">
            <OtherEngineeringNeeds />
          </Panel>
          <Panel
            header="بررسی مدارک فنی مناقصه و استخراج نکات تاثیر‌گذار مالی"
            key="4"
          >
            <CheckTenderOfficePaper />
          </Panel>
        </Collapse>
      </Layout>
    );
  }
}

export default OtherDocumentsReview;
