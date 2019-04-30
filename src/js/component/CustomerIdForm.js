import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBInput,
  MDBCol,
  MDBBtn,
  MDBProgress,
  MDBNavbar,
  MDBNavbarBrand
} from "mdbreact";

import { formData } from "./CustomerFormData";

class CustomerIdForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleChange = event => {
    const dataLable = event.target.getAttribute("datalabel");
    const value = event.target.value;
    if (value) {
      this.setState({ [dataLable]: value });
    } else {
      let status = this.state;
      delete status[dataLable];
      this.setState(status);
    }
  };

  sendDataToServer = () => {
    console.log(this.state);
  };

  render() {
    const process = (Object.keys(this.state).length / formData.length) * 100;
    let processColor;
    switch (true) {
      case process < 30:
        processColor = "danger";
        break;
      case process < 100:
        processColor = "warning";
        break;
      case process >= 100:
        processColor = "success";
        break;
      default:
        processColor = "success";
        break;
    }

    return (
      <>
        <MDBNavbar color="unique-color-dark" dark scrolling fixed="top">
          <MDBNavbarBrand>
            <h1>شناسه مشتری</h1>
          </MDBNavbarBrand>

          <MDBProgress color={processColor} value={process} className="w-50" />
          <MDBBtn
            color="success"
            size="lg"
            disabled={process !== 100}
            onClick={this.sendDataToServer}
          >
            ثبت مشتری
          </MDBBtn>
        </MDBNavbar>

        <MDBContainer className="text-center p-5 mt-5">
          <MDBRow className="p-1">
            {formData.map(field => {
              let formField = null;

              if (field.type === "select") {
                formField = (
                  <MDBCol
                    className="align-self-center"
                    size={field.size}
                    key={field.enLabel}
                  >
                    <select
                      className="browser-default custom-select w-100"
                      defaultValue={field.values[0].value}
                      datalabel={field.enLabel}
                      onInput={this.handleChange}
                    >
                      {field.values.map(value => (
                        <option
                          disabled={value.disabled}
                          value={value.value}
                          key={value.value}
                        >
                          {value.name}
                        </option>
                      ))}
                    </select>
                  </MDBCol>
                );
              } else {
                formField = (
                  <MDBCol
                    className="align-self-center"
                    size={field.size}
                    key={field.enLabel}
                  >
                    <MDBInput
                      type={field.type}
                      label={field.label}
                      className="w-100"
                      datalabel={field.enLabel}
                      onInput={this.handleChange}
                    />
                  </MDBCol>
                );
              }

              return formField;
            })}
          </MDBRow>
        </MDBContainer>
      </>
    );
  }
}

export default CustomerIdForm;
