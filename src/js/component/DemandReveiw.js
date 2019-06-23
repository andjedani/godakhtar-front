import React from "react";
import { Layout, Card, Col, Row, Radio, Input } from "antd";

const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px"
};

class DemandReview extends React.Component {
  static displayName = "بررسی اولیه‌ی تقاضا";

  render() {
    return (
      <Layout>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="هدف از تقاضا" bordered={false} style={{ width: 300 }}>
              <Radio.Group>
                <Radio style={radioStyle} value={0}>
                  خرید
                </Radio>
                <Radio style={radioStyle} value={1}>
                  مناقصه
                </Radio>
                <Radio style={radioStyle} value={2}>
                  برآوردی
                </Radio>
              </Radio.Group>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="سطح تقاضا" bordered={false} style={{ width: 300 }}>
              <Radio.Group>
                <Radio style={radioStyle} value={0}>
                  خرد
                </Radio>
                <Radio style={radioStyle} value={1}>
                  متوسط
                </Radio>
                <Radio style={radioStyle} value={2}>
                  کلان
                </Radio>
              </Radio.Group>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="سیاست تامین اولیه"
              bordered={false}
              style={{ width: 300 }}
            >
              <Radio.Group>
                <Radio style={radioStyle} value={0}>
                  موجودی
                </Radio>
                <Radio style={radioStyle} value={1}>
                  ساخت
                </Radio>
                <Radio style={radioStyle} value={2}>
                  تامین خارج
                </Radio>
                <Radio style={radioStyle} value={3}>
                  توسعه محصول
                </Radio>
                <Radio style={radioStyle} value={4}>
                  تامین داخل
                </Radio>
              </Radio.Group>
            </Card>
          </Col>
        </Row>
        <br />
        <Row gutter={16}>
          <Col span={8}>
            <Card title="نوع تقاضا" bordered={false} style={{ width: 300 }}>
              <Radio.Group>
                <Radio style={radioStyle} value={0}>
                  شیرآلات
                </Radio>
                <Radio style={radioStyle} value={1}>
                  تجهیزات جانبی
                </Radio>
                <Radio style={radioStyle} value={2}>
                  فطعات یدکی
                </Radio>
                <Radio style={radioStyle} value={3}>
                  آموزش
                </Radio>
                <Radio style={radioStyle} value={4}>
                  تعمیرات
                </Radio>
              </Radio.Group>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="اطلاعات پروژه" bordered={false} style={{ width: 300 }}>
              <div style={{ margin: 16 }}>
                <Input addonBefore="نام مشاور" />
              </div>
              <div style={{ margin: 16 }}>
                <Input addonBefore="نام کارفرما" />
              </div>
              <div style={{ margin: 16 }}>
                <Input addonBefore="نام پروژه" />
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="تخصیص کارشناس"
              bordered={false}
              style={{ width: 300 }}
            />
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default DemandReview;
