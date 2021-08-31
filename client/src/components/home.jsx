import React, { Component } from "react";
import PageHeader from "./common/PageHeader";

class Home extends Component {
  state = {};

  render() {
    return (
      <div className="container ">
        <PageHeader titleText="All Products" />
        <div className="col-12 mt-4">
        </div>

        <div className="row">
          <div className="col-12 mt-4"></div>
        </div>
        <div className="row">
          <div className="col-12"></div>
        </div>
      </div>
    );
  }
}

export default Home;