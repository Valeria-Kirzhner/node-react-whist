
import React from "react";
import './App.css';
import Navbar from "./components/common/Navbar";
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
          </Switch>
        </main>
    </React.Fragment>
  );
}

export default App;
