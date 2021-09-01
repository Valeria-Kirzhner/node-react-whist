import React, { Component } from "react";
import PageHeader from "./common/PageHeader";
import productService from "./services/productService";
import Product from "./Product";

class Home extends Component {

 
 componentDidUpdate(){
   console.log(this.props.products);
   this.props.setProducts('612d24df72d6b841c4ba5151')
 }
  render() {

     //const { products } = this.state;

    return (
<h1>hello</h1>
      // <div className="container">
      //     <PageHeader titleText="All Products" />     
      //       <div className="row">
      //     { products.length > 0 &&
      //       products.map((product) => (
      //         <Product
      //           key={product._id}
      //           product={product}
      //         />
      //       ))}
      //   </div>
      // </div>
    );
  }
}

export default Home;
