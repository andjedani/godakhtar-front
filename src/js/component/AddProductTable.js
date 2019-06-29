import React from "react";
import { Table, Select, Button, Row, Col, Card, InputNumber } from "antd";
import {
  productOptions,
  addSignleProductToInquiry,
  getProductById
} from "../network";

const { Option } = Select;

const columns = [
  {
    title: "شماره",
    dataIndex: "rowNumber",
    render: item => item + 1
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
    tableLoading: false,
    product_class: [],
    product_connection: [],
    product_size: [],
    product_type: [],
    product_class_map: {},
    product_connection_map: {},
    product_size_map: {},
    product_type_map: {},
    selectedProductClass: "",
    selectedProductConnection: "",
    selectedProductSize: "",
    selectedProductType: "",
    quantity: 1
  };

  componentDidMount = async () => {
    this.setState({ initloading: true });
    let data = await productOptions();
    if (data.data.actions.POST) {
      data = data.data.actions.POST;

      const product_class_map = {};
      const product_connection_map = {};
      const product_size_map = {};
      const product_type_map = {};

      data.product_class.choices.forEach(element => {
        product_class_map[element.value] = element.display_name;
      });
      data.product_connection.choices.forEach(element => {
        product_connection_map[element.value] = element.display_name;
      });
      data.product_size.choices.forEach(element => {
        product_size_map[element.value] = element.display_name;
      });
      data.product_type.choices.forEach(element => {
        product_type_map[element.value] = element.display_name;
      });

      this.setState({
        initloading: false,
        product_class: data.product_class.choices,
        product_connection: data.product_connection.choices,
        product_size: data.product_size.choices,
        product_type: data.product_type.choices,
        product_class_map,
        product_connection_map,
        product_size_map,
        product_type_map
      });
    }

    if (this.props.inquiry) {
      const inquiryList = this.props.inquiry.inquiry_products;
      for (let i = 0; i < inquiryList.length; i++) {
        this.setState({ tableLoading: true });
        getProductById(inquiryList[i].product).then(resp => {
          let data = resp.data ? resp.data : [];

          this.addProductToTable(
            data.product_type,
            data.product_size,
            data.product_class,
            data.product_connection,
            inquiryList[i].quantity
          );

          this.setState({ tableLoading: false });
        });
      }
    }
  };

  handleProductChange = (arg, value) => {
    this.setState({ [arg]: value });
  };

  addProductToTable(pType, pSize, pClass, pConnection, pQuantity) {
    const newProduct = {
      key: this.state.data.length,
      rowNumber: this.state.data.length,
      type: this.state.product_type_map[pType],
      class: this.state.product_class_map[pClass],
      connection: this.state.product_connection_map[pConnection],
      size: this.state.product_size_map[pSize],
      quantity: pQuantity
    };

    this.setState(prevState => ({
      data: [...prevState.data, newProduct]
    }));
  }

  addProduct = async () => {
    this.setState({ addProductLoading: true });

    const res = await addSignleProductToInquiry(this.props.inquiryId, {
      product_type: this.state.selectedProductType,
      product_size: this.state.selectedProductSize,
      product_class: this.state.selectedProductClass,
      product_connection: this.state.selectedProductConnection,
      quantity: this.state.quantity
    });

    console.log(res);

    if (res.status === 200) {
      this.addProductToTable(
        this.state.selectedProductType,
        this.state.selectedProductSize,
        this.state.selectedProductClass,
        this.state.selectedProductConnection,
        this.state.quantity
      );
    }

    this.setState({ addProductLoading: false });
  };

  render() {
    console.log(this.state.tableLoading);
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
        <Table
          dataSource={this.state.data}
          columns={columns}
          loading={this.state.tableLoading}
        />
      </div>
    );
  }
}

export default AddProductTable;
