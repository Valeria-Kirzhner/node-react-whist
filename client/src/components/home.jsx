import React from "react";
import PageHeader from "./common/PageHeader";
import Product from "./Product";

const Home = ({ products , onAddToCart}) => {

    return  products.length > 0 && (

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

export default Home;
