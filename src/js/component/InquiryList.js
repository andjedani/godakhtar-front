import React from "react";

import CustomHeader from "./Header";
import { Layout, Table } from "antd";
import { getInquiries } from "../network";

const columns = [
  { title: "شماره سفارش", dataIndex: "id" },
  {
    title: "مشتری",
    dataIndex: "customer",
    render: customer => {
      return <div>{customer.name}</div>;
    }
  },
  { title: "آدرس ارسال", dataIndex: "delivery_address" },
  { title: "گارانتی", dataIndex: "guaranty" },
  { title: "وارانتی", dataIndex: "warranty" },
  { title: "بسته‌بندی", dataIndex: "packaging" }
];

class InquiryList extends React.Component {
  state = {
    data: []
  };

  componentDidMount = async () => {
    let data = await getInquiries();
    data = data.data;
    this.setState({ data });
  };

  render() {
    return (
      <Layout>
        <CustomHeader />

        <Layout style={{ padding: "100px", backgroundColor: "#fff" }}>
          <Table
            columns={columns}
            dataSource={this.state.data}
            rowKey="id"
            onRow={record => {
              return {
                onClick: event => {
                  this.props.history.push("/inquiry/" + record.id);
                }
              };
            }}
          />
        </Layout>
      </Layout>
    );
  }
}

export default InquiryList;
