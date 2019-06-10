import React from "react";
import { Table, Select, Button, Row, Col, Input, Card } from "antd";

const { Option } = Select;

const columns = [
  {
    title: "شماره",
    dataIndex: "rowNumber"
  },
  {
    title: "نوع",
    dataIndex: "type"
  },
  {
    title: "کلاس",
    dataIndex: "class"
  },
  {
    title: "اتصال",
    dataIndex: "connection"
  },
  {
    title: "اندازه",
    dataIndex: "size"
  }
];

const data = [
  {
    key: "1",
    rowNumber: "۱",
    type: "نوع ۱",
    class: "بی‌کلاس",
    connection: "کوتاه",
    size: "ایکس لارج",
    customs: {
      "آینم ۰": "0",
      "آینم ۱": "1",
      "آینم ۲": "2",
      "آینم ۳": "3",
      "آینم ۴": "4",
      "آینم ۵": "5",
      "آینم ۶": "6",
      "آینم ۷": "7",
      "آینم ۸": "8",
      "آینم ۹": "9"
    }
  }
];

class AddProductTable extends React.Component {
  state = { data: [], initloading: false, num: 1 };

  expandedRowRender = customItems => {
    const columns = [];
    const data = {};
    Object.entries(customItems).forEach(([key, value]) => {
      columns.push({ title: key, dataIndex: key });
      data[key] = value;
    });
    return (
      <Table
        dataSource={[data]}
        columns={columns}
        pagination={{ position: "none" }}
      />
    );
  };

  render() {
    const customs = [];
    for (let i = 0; i < this.state.num; i++) {
      customs.push(
        <Row justify="center" key={i}>
          <Col span={2} style={{ textAlign: "center", padding: "20px" }}>
            <Input placeholder="نام" />
          </Col>
          <Col span={4} style={{ textAlign: "center", padding: "20px" }}>
            <Input placeholder="توضیحات" />
          </Col>
        </Row>
      );
    }
    return (
      <div>
        <Card>
          <Row justify="center" style={{ margin: "2px" }}>
            <Col span={2} style={{ textAlign: "center" }}>
              <b>نوع</b>
            </Col>
            <Col span={4} style={{ textAlign: "center" }}>
              <Select style={{ width: 200 }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Col>

            <Col span={2} style={{ textAlign: "center" }}>
              <b>کلاس</b>
            </Col>
            <Col span={4} style={{ textAlign: "center" }}>
              <Select style={{ width: 200 }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Col>

            <Col span={2} style={{ textAlign: "center" }}>
              <b>اتصال</b>
            </Col>
            <Col span={4} style={{ textAlign: "center" }}>
              <Select style={{ width: 200 }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Col>
            <Col span={2} style={{ textAlign: "center" }}>
              <b>اندازه</b>
            </Col>
            <Col span={4} style={{ textAlign: "center" }}>
              <Select style={{ width: 200 }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Col>
          </Row>

          {customs}

          <Button type="primary" onClick={() => {}}>
            افزودن محصول درخواستی
          </Button>
        </Card>
        <Table
          dataSource={data}
          columns={columns}
          expandedRowRender={record => this.expandedRowRender(record.customs)}
        />
      </div>
    );
  }
}

export default AddProductTable;
