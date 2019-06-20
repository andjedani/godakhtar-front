import React from "react";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";

const { Header } = Layout;

class CustomHeader extends React.Component {
  state = {
    selected: "0"
  };

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
        <Menu
          theme="light"
          mode="horizontal"
          style={{ lineHeight: "64px" }}
          selectedKeys={this.state.selectedKeys}
        >
          <Menu.Item key="1">
            <NavLink to="/inquiry">لیست سفارش‌ها</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/inquiry/add">افزودن سفارش</NavLink>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default CustomHeader;
