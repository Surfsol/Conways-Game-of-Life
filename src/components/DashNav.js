import React from "react";
import { NavLink, Route, withRouter, Link } from "react-router-dom";
import Board from "./Board";
import About from "./About";

function DashNav() {
  return (
    <div className="App">
      <Link to="/">Board</Link>
      <br></br>
      <Link to="/about">About</Link>


      <Route exact path="/" component={Board} />
      <Route exact path="/about" component={About} />
    </div>
  );
}

export default withRouter(DashNav);
