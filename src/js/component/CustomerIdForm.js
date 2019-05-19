import React from "react";

import { formData } from "./CustomerFormData";
import { createCustomer } from "../network/customer";
import { copyObject } from "../utility";
import FormGenerator from "./FormGenerator";

const formName = "شناسه مشتری";

class CustomerIdForm extends React.Component {
  sendDataToServer = () => {
    let json = copyObject(this.state.formData);
    const keys = Object.keys(json);

    for (let index in keys) {
      const key = keys[index];
      if (typeof json[key] === typeof []) {
        json[key] = json[key].map(value => JSON.stringify(value));
      }
    }

    console.log(json);
    createCustomer(json);
  };

  render() {
    return (
      <FormGenerator
        formName={formName}
        sendDataToServer={this.sendDataToServer}
        formData={formData}
      />
    );
  }
}

export default CustomerIdForm;
