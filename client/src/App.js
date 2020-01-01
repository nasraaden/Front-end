import React from 'react';

import "./App.css"
import {Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
    </div>
  );
}

export default App;
