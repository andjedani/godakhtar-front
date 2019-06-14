import React from "react";
import { Table, Select, Button, Row, Col, Card } from "antd";
import { productOptions, getProductAttrs } from "../network";

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
  // {
  // key: "1",
  // rowNumber: "۱",
  // type: "نوع ۱",
  // class: "بی‌کلاس",
  // connection: "کوتاه",
  // size: "ایکس لارج",
  // customs: {
  //   "آینم ۰": "0",
  //   "آینم ۱": "1",
  //   "آینم ۲": "2",
  //   "آینم ۳": "3",
  //   "آینم ۴": "4",
  //   "آینم ۵": "5",
  //   "آینم ۶": "6",
  //   "آینم ۷": "7",
  //   "آینم ۸": "8",
  //   "آینم ۹": "9"
  // }
  // }
];

class AddProductTable extends React.Component {
  state = {
    data: [],
    initloading: false,
    product_class: [],
    product_connection: [],
    product_size: [],
    product_type: [],
    selectedProductClass: null,
    selectedProductConnection: null,
    selectedProductSize: null,
    selectedProductType: null
  };

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

  componentDidMount = async () => {
    let data = await productOptions();
    if (data.data.actions.POST) {
      data = data.data.actions.POST;
      this.setState({
        product_class: data.product_class.choices,
        product_connection: data.product_connection.choices,
        product_size: data.product_size.choices,
        product_type: data.product_type.choices
      });
    }
  };

  handleProductChange = (arg, value) => {
    this.setState({ [arg]: value });
  };

  getProductAttributes = async () => {
    const productName =
      this.state.selectedProductType +
      this.state.selectedProductClass +
      this.state.selectedProductConnection +
      this.state.selectedProductSize;

    console.log(productName);
    const data = await getProductAttrs(productName);
    console.log(data);
  };

  render() {
    let attributes = [];

    return (
      <div>
        <Card>
          <Row justify="center" style={{ margin: "2px" }}>
            <Col span={2} style={{ textAlign: "center" }}>
              <b>نوع</b>
            </Col>
            <Col span={4} style={{ textAlign: "center" }}>
              <Select
                style={{ width: 200 }}
                onChange={value =>
                  this.handleProductChange("selectedProductType", value)
                }
              >
                {this.state.product_type.map(item => (
                  <Option value={item.value} key={item.value}>
                    {item.display_name}
                  </Option>
                ))}
              </Select>
            </Col>

            <Col span={2} style={{ textAlign: "center" }}>
              <b>کلاس</b>
            </Col>
            <Col span={4} style={{ textAlign: "center" }}>
              <Select
                style={{ width: 200 }}
                onChange={value =>
                  this.handleProductChange("selectedProductClass", value)
                }
              >
                {this.state.product_class.map(item => (
                  <Option value={item.value} key={item.value}>
                    {item.display_name}
                  </Option>
                ))}
              </Select>
            </Col>

            <Col span={2} style={{ textAlign: "center" }}>
              <b>اتصال</b>
            </Col>
            <Col span={4} style={{ textAlign: "center" }}>
              <Select
                style={{ width: 200 }}
                onChange={value =>
                  this.handleProductChange("selectedProductConnection", value)
                }
              >
                {this.state.product_connection.map(item => (
                  <Option value={item.value} key={item.value}>
                    {item.display_name}
                  </Option>
                ))}
              </Select>
            </Col>
            <Col span={2} style={{ textAlign: "center" }}>
              <b>اندازه</b>
            </Col>
            <Col span={4} style={{ textAlign: "center" }}>
              <Select
                style={{ width: 200 }}
                onChange={value =>
                  this.handleProductChange("selectedProductSize", value)
                }
              >
                {this.state.product_size.map(item => (
                  <Option value={item.value} key={item.value}>
                    {item.display_name}
                  </Option>
                ))}
              </Select>
            </Col>
          </Row>

          <br />

          <Row>
            <Col>
              <Button type="dashed" onClick={this.getProductAttributes}>
                دریافت ویژگی‌ها
              </Button>
            </Col>
          </Row>
          {attributes}

          <br />
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
