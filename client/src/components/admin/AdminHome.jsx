import React, { Component } from "react";
import PageHeader from "../common/PageHeader";
import productService from "../services/productService";
import Product from "./AdminProduct";

class AdminHome extends Component {

  state = {
    products: [],
  };

  async componentDidMount() {
    const { data } = await productService.allProducts();
    if (data.length > 0) this.setState({ products: data });
    console.log(this.state.products);
  }

  render() {

      const { products } = this.state;

    return (

      <div className="container">
          <PageHeader titleText="All Products" />     
            <div className="row">
          { products.length > 0 &&
            products.map((product) => (
              <Product
                key={product._id}
                product={product}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default AdminHome;