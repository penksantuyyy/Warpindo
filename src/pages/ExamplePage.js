import React, { Component } from "react";
import InputDate from "elements/Form/InputDate";

export default class ExamplePage extends Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="grid grid-cols-12" style={{ height: "100vh" }}>
        <div className="col-span-4">
          <InputDate
            max={30}
            onChange={this.handleChange}
            name="value"
            value={this.state.value}
          />
        </div>
      </div>
    );
  }
}
