import React from "react";
import './App.css';
import Navbar from "./components/common/Navbar";
import AddProduct from "./components/admin/AddProduct";
import Home from "./components/Home";
import AdminHome from "./components/admin/AdminHome";
import EditProduct from "./components/admin/EditProduct";
import Product from "./components/Product";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
       <header>
          <Navbar />
        </header>
        <main>
          <Switch >
          <Route exact path="/" component={Home} />
          <Route path="/product/add" component={AddProduct}/>
          <Route exact path="/product" component={Product}/>
          <Route exact path="/admin" component={AdminHome}/>
          <Route exact path="/product/edit/:id" component={EditProduct}/>
          </Switch>
        </main>
    </React.Fragment>
  );
}

export default App;
