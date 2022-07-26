import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return(
    <div className="navbar">
        <div className="home-navbar">
            <h1><NavLink to="/" exact>The Bombshell Beauty</NavLink></h1>
        </div>
        <div className="rest-navbar">
            <h1><NavLink to="/addnew" exact>Add New</NavLink></h1>
            <h1><NavLink to="/about" exact>About</NavLink></h1>
        </div>
    </div>
  )
}

export default Navbar;