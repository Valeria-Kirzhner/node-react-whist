
import React from "react";
import './App.css';
import Navbar from "./components/common/Navbar";
import AddProduct from "./components/admin/AddProduct";
import Home from "./components/Home";
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
          </Switch>
        </main>
    </React.Fragment>
  );
}

export default App;
