import React from "react";
import PageHeader from "./common/PageHeader";
import Product from "./Product";

const Home = ({ products , onAddToCart}) => {

    return  products.length > 0 && (

      <div className="container">
           <PageHeader titleText="All Products" />     
       <div className="row">
          { 
            products.map((product,index) => (
              <Product
                key={index}
                  product={product}
                  onAddToCart={ onAddToCart }
                />
            ))}
        </div>
       </div>
    );
  
}

export default Home;
