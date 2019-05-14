import React from "react";

import { MDBProgress, MDBNavbar, MDBNavbarBrand } from "mdbreact";

export class FormHeader extends React.Component {
  render() {
    const process = (this.props.completedFields / this.props.allFields) * 100;
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
      <MDBNavbar color="unique-color-dark" dark scrolling fixed="top">
        <MDBNavbarBrand>
          <h1>{this.props.formName}</h1>
        </MDBNavbarBrand>

        <MDBProgress color={processColor} value={process} className="w-50" />
      </MDBNavbar>
    );
  }
}
