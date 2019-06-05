import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Layout } from "antd";

const { Footer } = Layout;

class CustomFooter extends React.Component {
  render() {
    const element = (
      <FontAwesomeIcon
        icon={faCoffee}
        style={{
          marginLeft: "5px",
          marginRight: "5px",
          color: "#279faf"
        }}
      />
    );

    return (
      <Footer>
        طراحی و توسعه با {element}
        در گراف
      </Footer>
    );
  }
}

export default CustomFooter;
