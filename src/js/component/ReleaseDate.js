import React from "react";
import { Layout, Card } from "antd";
import { DatePicker } from "jalali-react-datepicker";

class ReleaseDate extends React.Component {
  render() {
    return (
      <Layout>
        <Card>
          <span
            style={{
              float: "right",
              border: "1px solid #d9d9d9",
              borderRadius: "4px",
              padding: "5px"
            }}
          >
            زمان تحویل
          </span>
          <span>
            <DatePicker
              timePicker={false}
              onClickSubmitButton={value => console.log(value["_i"])}
            />
          </span>
        </Card>
      </Layout>
    );
  }
}

export default ReleaseDate;
