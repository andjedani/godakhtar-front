import React from "react";
import { Button } from "antd";
import { deleteSignleProductToInquiry } from "../network";

class DeleteButton extends React.Component {
  state = { isDisable: false };
  render() {
    let label = this.state.isDisable ? "حذف شد!" : "حذف";
    return (
      <Button
        disabled={this.state.isDisable}
        onClick={async () => {
          let res = await deleteSignleProductToInquiry(
            this.props.inquiryId,
            this.props.productId
          );
          if (res.status === 200) {
            this.setState({ isDisable: true });
          }
        }}
      >
        {label}
      </Button>
    );
  }
}

export default DeleteButton;
