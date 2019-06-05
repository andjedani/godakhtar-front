import React from "react";
import { Layout, Collapse, Icon } from "antd";

const Panel = Collapse.Panel;

class DemandDetailsReview extends React.Component {
  static displayName = "بررسی جزئیات تقاضا";

  render() {
    return (
      <Layout>
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => (
            <Icon type="caret-right" rotate={isActive ? 90 : 180} />
          )}
        >
          <Panel header="تکمیل مشخصات هر کد محصول" key="1">
            <p>Hi</p>
          </Panel>
          <Panel header="بررسی اسناد مناقصه و استخراج شرایط بازرگانی" key="2">
            <p>Hi</p>
          </Panel>
          <Panel header="اولویت‌های مورد نظر مشتری" key="3">
            <p>Hi</p>
          </Panel>
          <Panel
            header="تهیه‌ی نامه‌ی درخواست ضمانت‌نامه شرکت در مناقصه در صورت نیاز"
            key="4"
          >
            <p>Hi</p>
          </Panel>
        </Collapse>
      </Layout>
    );
  }
}

export default DemandDetailsReview;
