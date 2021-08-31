
import React from "react";
import './App.css';
import Navbar from "./components/common/Navbar";
import AddProduct from "./components/admin/AddProduct";
import Home from "./components/Home";
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
          </Switch>
        </main>
    </React.Fragment>
  );
}

export default App;
