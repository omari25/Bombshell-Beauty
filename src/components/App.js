import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import AddNew from "./AddNew";
import About from "./About";

function App() {
  return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/about"><About /></Route>
          <Route exact path="/addnew"><AddNew /></Route>
        </Switch>
      </div>
  )
}

export default App;
