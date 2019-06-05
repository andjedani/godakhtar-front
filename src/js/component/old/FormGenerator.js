import React from "react";

import generateHash from "random-hash";
import { copyObject } from "../../utility";
import { FormHeader } from "./FormHeader";
import { Col, Row, Input, Button, Card, Layout } from "antd";

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
        <Col span={formsRecipe[i].size} key={formsRecipe[i].enLabel}>
          <Input
            type={formsRecipe[i].type}
            addonBefore={formsRecipe[i].label}
            datalabel={hash + "/" + formsRecipe[i].enLabel}
            onChange={event =>
              this.handleChangeArray(event, field.enLabel, hash)
            }
          />
        </Col>
      );
    }

    const nextForms = (
      <Card key={hash} labelhash={hash}>
        <Row justify="center">{forms}</Row>

        <Button
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
        </Button>
      </Card>
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
      <Layout>
        <FormHeader
          formName={this.props.formName}
          allFields={this.props.formData.length}
          completedFields={Object.keys(this.state.formData).length}
        />

        <form onSubmit={this.submitHandler} noValidate>
          <div>
            <Row justify="center">
              {this.props.formData.map(field => {
                let formField = null;

                if (field.type === "arrayList") {
                  formField = (
                    // <Layout>
                    <Row justify="center" key={field.enLabel}>
                      <Col span={field.size}>
                        <Button
                          color="primary"
                          onClick={() => this.addArrayForms(field)}
                        >
                          {field.label}
                        </Button>
                      </Col>
                      {this.state[field.enLabel]}
                    </Row>
                    // </Layout>
                  );
                } else if (field.type === "select") {
                  formField = (
                    <Col span={field.size} key={field.enLabel}>
                      <select
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
                    </Col>
                  );
                } else {
                  formField = (
                    <Col span={field.size} key={field.enLabel}>
                      <Input
                        type={field.type}
                        addonBefore={field.label}
                        datalabel={field.enLabel}
                        onChange={this.handleChange}
                        required={field.required}
                      />
                    </Col>
                  );
                }

                return formField;
              })}
            </Row>
            <Row justify="center">
              <Button color="success" type="submit">
                ثبت مشتری
              </Button>
            </Row>
          </div>
        </form>
      </Layout>
    );
  }
}

export default FormGenerator;
