import React from "react";
import { Table, Select, Button, Modal, Row, Col, Input } from "antd";

const { Option } = Select;

const columns = [
  {
    title: "شماره",
    dataIndex: "rowNumber"
  },
  {
    title: "نوع",
    dataIndex: "type",
    render: () => (
      <Select style={{ width: "200px" }}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
    )
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
    size: "ایکس لارج"
  }
];

class AddProductTable extends React.Component {
  state = { data: [], initloading: false, num: 1, visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    const customs = [];
    for (let i = 0; i < this.state.num; i++) {
      customs.push(
        <Row justify="center" key={i}>
          <Col span={12} style={{ textAlign: "center", padding: "20px" }}>
            <Input placeholder="نام" />
          </Col>
          <Col span={12} style={{ textAlign: "center", padding: "20px" }}>
            <Input placeholder="توضیحات" />
          </Col>
        </Row>
      );
    }
    return (
      <>
        <div>
          <Button type="primary" onClick={this.showModal}>
            افزودن محصول درخواستی
          </Button>
          <Modal
            title="افزودن محصول درخواستی"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            okText="افزودن"
            cancelText="بی‌خیال"
          >
            <Row justify="center" style={{ margin: "2px" }}>
              <Col span={12} style={{ textAlign: "center" }}>
                <b>نوع</b>
              </Col>
              <Col span={12} style={{ textAlign: "center" }}>
                <Select style={{ width: "200px" }}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="disabled" disabled>
                    Disabled
                  </Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </Col>
            </Row>
            <Row justify="center" style={{ margin: "2px" }}>
              <Col span={12} style={{ textAlign: "center" }}>
                <b>کلاس</b>
              </Col>
              <Col span={12} style={{ textAlign: "center" }}>
                <Select style={{ width: "200px" }}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="disabled" disabled>
                    Disabled
                  </Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </Col>
            </Row>
            <Row justify="center" style={{ margin: "2px" }}>
              <Col span={12} style={{ textAlign: "center" }}>
                <b>اتصال</b>
              </Col>
              <Col span={12} style={{ textAlign: "center" }}>
                <Select style={{ width: "200px" }}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="disabled" disabled>
                    Disabled
                  </Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </Col>
            </Row>
            <Row justify="center" style={{ margin: "2px" }}>
              <Col span={12} style={{ textAlign: "center" }}>
                <b>اندازه</b>
              </Col>
              <Col span={12} style={{ textAlign: "center" }}>
                <Select style={{ width: "200px" }}>
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
          </Modal>
        </div>
        <Table dataSource={data} columns={columns} scroll={{ x: true }} />
      </>
    );
  }
}

export default AddProductTable;
