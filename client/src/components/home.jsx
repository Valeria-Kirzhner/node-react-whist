import React, { Component } from "react";
import PageHeader from "./common/PageHeader";
import productService from "./services/productService";

class Home extends Component {

  state = {
    products: [],
  };

  async componentDidMount() {
    const { data } = await productService.allProducts();
    if (data.length > 0) this.setState({ products: data });
    console.log(this.state.products);
  }

  render() {
    return (
      <div className="container ">
          <PageHeader titleText="All Products" />
            <div className="col-12 mt-4">
            </div>

            <div className="row">
              <div className="col-12 mt-4">
              </div>
            </div> 

            <div className="row">
            <div className="col-12"></div>
          </div>
      </div>
    );
  }
}

export default Home;