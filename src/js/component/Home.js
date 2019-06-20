import React from "react";

import CustomHeader from "./Header";
import { Layout } from "antd";

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <CustomHeader />
        <Layout className="main-home" />
      </Layout>
    );
  }
}

export default Home;
