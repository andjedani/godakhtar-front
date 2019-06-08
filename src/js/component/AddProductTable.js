import React from "react";
import { readCustomer } from "../network/customer";
import { Table, Select } from "antd";

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
      <Select defaultValue="lucy" style={{ width: "200px" }}>
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
    rowNumber: "۱",
    type: "نوع ۱",
    class: "بی‌کلاس",
    connection: "کوتاه",
    size: "ایکس لارج"
  }
];

class AddProductTable extends React.Component {
  state = { data: [], initloading: false };

  getData = async () => {
    this.setState({ initloading: true });
    let data = await readCustomer();
    if (data) data = data.data;
    else data = [];

    console.log(data);
    this.setState({ data, initloading: false });
  };

  componentWillMount = () => {
    this.getData();
  };

  render() {
    return <Table dataSource={data} columns={columns} scroll={{ x: true }} />;
  }
}

export default AddProductTable;
