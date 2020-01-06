import React from "react";

import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
<<<<<<< HEAD
import Signup from './components/Signup';
import UpdateWorkout from './components/Workout/UpdateWorkout';
=======

import Signup from "./components/Signup";
import Workout from "./components/Workout/Workout";
import UpdateWorkout from "./components/Workout/UpdateWorkout";
import WorkoutList from "./components/Workout/WorkoutList";

import PrivateRoute from "./utils/privateRoute";

>>>>>>> 840beb25c670c42fdb57a431ae3ed8346907248e

function App() {
  return (
    <div className="App">
      <NavBar />

        <WorkoutList />
      

      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
<<<<<<< HEAD
      <Route path="/AddWorkout" component={UpdateWorkout}/>
=======

   
>>>>>>> 840beb25c670c42fdb57a431ae3ed8346907248e
    </div>
  );
}

export default App;
