import React, { Component } from "react";
import Breadcrumb from "elements/Breadcrumb";

export default class ExamplePage extends Component {
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const breadcrumbList = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "Coffee Details", pageHref: "" },
    ];

    return (
      <div
        className="flex justify-center items-center"
        style={{ height: "100vh" }}
      >
        <div className="col-span-4">
          <Breadcrumb data={breadcrumbList} />
        </div>
      </div>
    );
  }
}
