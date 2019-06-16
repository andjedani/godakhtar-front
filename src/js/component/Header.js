import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

class CustomHeader extends React.Component {
  render() {
    return (
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          backgroundColor: "#fff"
        }}
      >
        <div className="logo" />
        <Menu theme="light" mode="horizontal" style={{ lineHeight: "64px" }}>
          <Menu.Item key="1">
            <Link to="/inquery">لیست سفارش‌ها</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/inquery/add">افزودن سفارش</Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default CustomHeader;
