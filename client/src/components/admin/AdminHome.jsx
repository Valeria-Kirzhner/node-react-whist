import React from "react";
import PageHeader from "../common/PageHeader";
import Product from "./AdminProduct";
import { Link } from "react-router-dom";

const AdminHome = ({ products, deleteProductClientSide }) => {

    return (

      <div className="container">
        <PageHeader titleText="All Products" />  
          <div className="row no-gutters">
            <div className="col-12 col-sm-6 col-md-8"></div>
              <div className="col-6 col-md-4">
                <Link to="/product/add">
                  <img src={"https://www.pngkit.com/png/full/670-6706313_plus-button-green.png"} alt="create button" style={{ width: "50px"}}  />
                </Link>
              </div>
              
      <div className="row">
        { products.length > 0 &&
            products.map((product) => (
              <Product
              key={product._id}
              product={product}
              deleteProductClientSide={deleteProductClientSide}
              />
        ))}
          </div>
        </div>
      </div>
    );
}
export default AdminHome;