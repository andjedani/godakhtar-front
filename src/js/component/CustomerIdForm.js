import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBInput,
  MDBCol,
  MDBBtn,
  MDBProgress,
  MDBNavbar,
  MDBNavbarBrand,
  MDBCard,
  MDBCardBody,
  MDBCardFooter
} from "mdbreact";

import { formData } from "./CustomerFormData";
import md5 from "js-md5";

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

  addArrayForms = field => {
    const prevForms = this.state[field.enLabel]
      ? this.state[field.enLabel]
      : [];
    let forms = [];

    const formsRecipe = field.forms;
    for (let i = 0; i < formsRecipe.length; i++) {
      forms.push(
        <MDBCol
          className="align-self-center"
          size={formsRecipe[i].size}
          key={formsRecipe[i].enLabel}
        >
          <MDBInput
            type={formsRecipe[i].type}
            label={formsRecipe[i].label}
            className="w-100"
            datalabel={formsRecipe[i].enLabel}
          />
        </MDBCol>
      );
    }
    const hash = md5(new Date().toString());
    const nextForms = (
      <MDBCard className="m-2" key={prevForms.length} labelhash={hash}>
        <MDBCardBody>
          <MDBContainer>
            <MDBRow>{forms}</MDBRow>
          </MDBContainer>
        </MDBCardBody>
        <MDBCardFooter className="text-left">
          <MDBBtn
            outline
            color="danger"
            size="sm"
            onClick={() => {
              const list = this.state[field.enLabel];
              let index = -1;

              for (let i = 0; i < list.length; i++) {
                if (list[i].props.labelhash === hash) {
                  index = i;
                }
              }
              list.splice(index, 1);
              this.setState({ [field.enLabel]: [...list] });
            }}
          >
            حذف
          </MDBBtn>
        </MDBCardFooter>
      </MDBCard>
    );
    this.setState({
      [field.enLabel]: [...prevForms, nextForms]
    });
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

              if (field.type === "arrayList") {
                formField = (
                  <MDBContainer key={field.enLabel}>
                    <MDBRow>
                      <MDBCol className="text-right" size={field.size}>
                        <MDBBtn
                          outline
                          color="primary"
                          onClick={() => this.addArrayForms(field)}
                        >
                          {field.label}
                        </MDBBtn>
                      </MDBCol>
                      {this.state[field.enLabel]}
                    </MDBRow>
                  </MDBContainer>
                );
              } else if (field.type === "select") {
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
