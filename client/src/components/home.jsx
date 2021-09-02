import React, { Component } from "react";
import PageHeader from "./common/PageHeader";
import Product from "./Product";

class Home extends Component {


  render() {

    const {products, onAddToCart } = this.props;

    return products.length > 0 && (

      <div className="container">
           <PageHeader titleText="All Products" />     
       <div className="row">
          { 
            products.map((product) => (
              <Product
                key={product._id}
                  product={product}
                  onAddToCart={ onAddToCart }
                />
            ))}
        </div>
       </div>
    );
  }
}

export default Home;
