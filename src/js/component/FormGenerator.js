import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBInput,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter
} from "mdbreact";

import generateHash from "random-hash";
import { copyObject } from "../utility";
import { FormHeader } from "./FormHeader";

class FormGenerator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      required: [],
      formData: {}
    };
  }

  componentDidMount() {
    this.addToRequired();
  }

  handleChange = event => {
    const dataLabel = event.target.getAttribute("datalabel");
    const value = event.target.value;
    this.setState(prevState => ({
      formData: { ...prevState.formData, [dataLabel]: value }
    }));
  };

  handleChangeArray = (event, groupName, hash) => {
    const dataLabel = event.target.getAttribute("datalabel").split("/")[1];
    const value = event.target.value;
    let group = copyObject(this.state.formData[groupName]);
    group = group ? group : [];

    let obj = { id: hash };
    for (let i in group) {
      if (group[i].id && group[i].id === hash) {
        obj = { ...group[i] };
        group.splice(i, 1);
      }
    }
    obj = { ...obj, ...{ [dataLabel]: value } };

    this.setState(prevState => ({
      formData: { ...prevState.formData, [groupName]: [...group, obj] }
    }));
  };

  addArrayForms = field => {
    const prevForms = this.state[field.enLabel]
      ? this.state[field.enLabel]
      : [];
    let forms = [];

    const formsRecipe = field.forms;
    const hash = generateHash();

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
            datalabel={hash + "/" + formsRecipe[i].enLabel}
            onChange={event =>
              this.handleChangeArray(event, field.enLabel, hash)
            }
          />
        </MDBCol>
      );
    }

    const nextForms = (
      <MDBCard className="m-2" key={hash} labelhash={hash}>
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
              const list = [...this.state[field.enLabel]];
              let index = -1;

              for (let i = 0; i < list.length; i++) {
                if (list[i].props.labelhash === hash) {
                  index = i;
                }
              }

              list.splice(index, 1);

              let newState = this.state;
              newState[field.enLabel] = list;
              let keys = Object.keys(newState);
              for (let i in keys) {
                if (keys[i].indexOf(hash) !== -1) {
                  delete newState[keys[i]];
                }
              }
              this.setState(newState);
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

  addToRequired = () => {
    let required = this.props.formData
      .filter(field => field.required)
      .map(field => field.enLabel);

    this.setState({ required });
  };

  submitHandler = event => {
    event.preventDefault();
    if (event.target.className.indexOf("was-validated") === -1)
      event.target.className += " was-validated";

    for (let index in this.state.required) {
      const key = this.state.required[index];
      if (!this.state.formData[key]) return;
    }

    this.props.sendDataToServer();
  };

  render() {
    return (
      <>
        <FormHeader
          formName={this.props.formName}
          allFields={this.props.formData.length}
          completedFields={Object.keys(this.state.formData).length}
        />

        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBContainer className="text-center p-5 mt-5">
            <MDBRow className="p-1">
              {this.props.formData.map(field => {
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
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
                        required={field.required}
                      >
                        <div className="invalid-feedback">
                          این قسمت باید کامل شود
                        </div>
                      </MDBInput>
                    </MDBCol>
                  );
                }

                return formField;
              })}
            </MDBRow>
            <MDBRow>
              <MDBBtn color="success" size="lg" type="submit">
                ثبت مشتری
              </MDBBtn>
            </MDBRow>
          </MDBContainer>
        </form>
      </>
    );
  }
}

export default FormGenerator;
