import React from 'react';

import "./App.css"
import {Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from './components/Signup';
import UpdateWorkout from './components/Workout/UpdateWorkout';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/AddWorkout" component={UpdateWorkout}/>
    </div>
  );
}

export default App;
