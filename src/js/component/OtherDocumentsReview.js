import React from "react";
import { Layout, Collapse, Icon } from "antd";

const Panel = Collapse.Panel;

class OtherDocumentsReview extends React.Component {
  static displayName = "بررسی سایر مدارک";

  render() {
    return (
      <Layout>
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => (
            <Icon type="caret-right" rotate={isActive ? 90 : 180} />
          )}
        >
          <Panel header="تکمیل مشخصات هر کد محصول مطابق با مدارک پروژه" key="1">
            <p>Hi</p>
          </Panel>
          <Panel header="سطح تکنولوژی تقاضا" key="2">
            <p>Hi</p>
          </Panel>
          <Panel header="درک سایر الزامات مهندسی" key="3">
            <p>Hi</p>
          </Panel>
          <Panel
            header="بررسی مدارک فنی مناقصه و استخراج نکات تاثیر‌گذار مالی"
            key="4"
          >
            <p>Hi</p>
          </Panel>
        </Collapse>
      </Layout>
    );
  }
}

export default OtherDocumentsReview;
