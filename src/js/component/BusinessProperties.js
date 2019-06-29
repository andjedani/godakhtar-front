import React from "react";
import { Layout, Input, Row, Col, Card, Radio } from "antd";
import { DatePicker } from "jalali-react-datepicker";

const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px"
};

class BusinessProperties extends React.Component {
  render() {
    return (
      <Layout>
        <Card>
          <Row gutter={16}>
            <Col span={12}>
              <Card
                title="شرایط پرداخت"
                bordered={false}
                style={{ width: 300 }}
              >
                <Radio.Group>
                  <Radio style={radioStyle} value={0}>
                    به صورت ۵۰٪ پیش پرداخت - الباقی قبل از حمل
                  </Radio>
                  <Radio style={radioStyle} value={1}>
                    به صورت ۲۵٪ پیش پرداخت و الباقی بعد از تحویل کالا
                  </Radio>
                </Radio.Group>
              </Card>
            </Col>
            <Col span={12}>
              <span
                style={{
                  float: "right",
                  border: "1px solid #d9d9d9",
                  borderRadius: "4px",
                  padding: "5px"
                }}
              >
                تاریخ تحویل
              </span>
              <span>
                <DatePicker
                  timePicker={false}
                  onClickSubmitButton={value => console.log(value["_i"])}
                />
              </span>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Card title="محل تحویل" bordered={false} style={{ width: 300 }}>
                <Radio.Group>
                  <Radio style={radioStyle} value={0}>
                    درب انبار گداختار - اراک
                  </Radio>
                  <Radio style={radioStyle} value={1}>
                    درب انبار مشتری
                  </Radio>
                  <Radio style={radioStyle} value={2}>
                    پشت گمرک
                  </Radio>
                </Radio.Group>
              </Card>
            </Col>
            <Col span={12}>
              <Input addonBefore="وندورلیست" />
            </Col>
          </Row>
        </Card>
      </Layout>
    );
  }
}

export default BusinessProperties;
