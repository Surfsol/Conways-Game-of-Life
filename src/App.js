import React from 'react';
import { NavLink, Route, withRouter } from "react-router-dom";
import './App.css';
import Board from './components/Board'
import About from './components/About'
import DashNav from './components/DashNav'

function App() {
  return (
    <div className="App">
     <DashNav/>
    </div>
  );
}

export default App;
