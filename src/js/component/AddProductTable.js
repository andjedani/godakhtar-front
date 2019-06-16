import React from "react";
import { Table, Select, Button, Row, Col, Card, InputNumber } from "antd";
import { productOptions, addSignleProductToInquiry } from "../network";

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
  },
  {
    title: "تعداد",
    dataIndex: "quantity"
  }
];

class AddProductTable extends React.Component {
  state = {
    data: [],
    initloading: false,
    addProductLoading: false,
    product_class: [],
    product_connection: [],
    product_size: [],
    product_type: [],
    selectedProductClass: "",
    selectedProductConnection: "",
    selectedProductSize: "",
    selectedProductType: "",
    quantity: 1,
    num: 0
  };

  componentDidMount = async () => {
    this.setState({ initloading: true });
    let data = await productOptions();
    if (data.data.actions.POST) {
      data = data.data.actions.POST;
      this.setState({
        initloading: false,
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

  addProduct = async () => {
    this.setState({ addProductLoading: true });

    const res = await addSignleProductToInquiry(this.props.inquiryId, {
      product_type: this.state.selectedProductType,
      product_size: this.state.selectedProductSize,
      product_class: this.state.selectedProductClass,
      product_connection: this.state.selectedProductConnection,
      quantity: this.state.quantity
    });

    const newProduct = {
      key: this.state.num,
      rowNumber: this.state.num,
      type: this.state.product_type.reduce((map, item) => {
        map[item.value] = item.display_name;
        return map;
      })[this.state.selectedProductType],
      class: this.state.product_class.reduce((map, item) => {
        map[item.value] = item.display_name;
        return map;
      })[this.state.selectedProductClass],
      connection: this.state.product_connection.reduce((map, item) => {
        map[item.value] = item.display_name;
        return map;
      })[this.state.selectedProductConnection],
      size: this.state.product_size.reduce((map, item) => {
        map[item.value] = item.display_name;
        return map;
      })[this.state.selectedProductSize],
      quantity: this.state.quantity
    };

    if (res.status === 200) {
      this.setState(prevState => ({
        num: prevState.num + 1,
        data: [...prevState.data, newProduct]
      }));
    }

    this.setState({ addProductLoading: false });
  };

  render() {
    return (
      <div>
        <Card>
          <Row justify="center" style={{ margin: "2px" }}>
            <Col span={4} style={{ textAlign: "center" }}>
              <b>نوع</b>
            </Col>
            <Col span={8} style={{ textAlign: "center" }}>
              <Select
                loading={this.state.initloading}
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

            <Col span={4} style={{ textAlign: "center" }}>
              <b>کلاس</b>
            </Col>
            <Col span={8} style={{ textAlign: "center" }}>
              <Select
                loading={this.state.initloading}
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
          </Row>
          <Row justify="center" style={{ margin: "2px" }}>
            <Col span={4} style={{ textAlign: "center" }}>
              <b>اتصال</b>
            </Col>
            <Col span={8} style={{ textAlign: "center" }}>
              <Select
                loading={this.state.initloading}
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
            <Col span={4} style={{ textAlign: "center" }}>
              <b>اندازه</b>
            </Col>
            <Col span={8} style={{ textAlign: "center" }}>
              <Select
                loading={this.state.initloading}
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

          <Row justify="center" style={{ margin: "2px" }}>
            <Col span={4} style={{ textAlign: "center" }}>
              <b>تعداد</b>
            </Col>
            <Col span={8} style={{ textAlign: "center" }}>
              <InputNumber
                min={1}
                defaultValue={1}
                onChange={value => this.handleProductChange("quantity", value)}
                style={{ width: 200 }}
              />
            </Col>
          </Row>

          <br />

          <Button
            type="primary"
            onClick={this.addProduct}
            loading={this.state.addProductLoading}
            disabled={this.state.addProductLoading}
          >
            افزودن محصول درخواستی
          </Button>
        </Card>
        <Table dataSource={this.state.data} columns={columns} />
      </div>
    );
  }
}

export default AddProductTable;
