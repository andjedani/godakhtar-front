import React from "react";
import { Layout, Collapse, Icon } from "antd";
import BusinessProperties from "./BusinessProperties";
import CustomerPriorities from "./CustomerPriorities";
import TenderOfficePaper from "./TenderOfficePaper";

const Panel = Collapse.Panel;

class DemandDetailsReview extends React.Component {
  static displayName = "بررسی جزئیات تقاضا";

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
          <Panel header="تکمیل مشخصات هر کد محصول" key="1">
            <p>hi</p>
          </Panel>
          <Panel header="بررسی اسناد مناقصه و استخراج شرایط بازرگانی" key="2">
            <BusinessProperties />
          </Panel>
          <Panel header="اولویت‌های مورد نظر مشتری" key="3">
            <CustomerPriorities />
          </Panel>
          <Panel
            header="تهیه‌ی نامه‌ی درخواست ضمانت‌نامه شرکت در مناقصه در صورت نیاز"
            key="4"
          >
            <TenderOfficePaper />
          </Panel>
        </Collapse>
      </Layout>
    );
  }
}

export default DemandDetailsReview;
