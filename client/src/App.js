import React from "react";

import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
<<<<<<< HEAD
import Signup from './components/Signup';
import WorkoutList from './components/WorkoutList'
=======
import Signup from "./components/Signup";
import Workout from "./components/Workout/Workout";
import UpdateWorkout from "./components/Workout/UpdateWorkout";
import WorkoutList from "./components/Workout/WorkoutList";

import PrivateRoute from "./utils/privateRoute";
>>>>>>> 93f705d6c608aa658994ac4800c40e9d21bf89d2

function App() {
  return (
    <div className="App">
      <NavBar />
<<<<<<< HEAD
        <WorkoutList />
      
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
=======
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <PrivateRoute path="/workout/:id" component={Workout} />
      <PrivateRoute path="/updateworkout/:id" component={UpdateWorkout} />
      <PrivateRoute path="/workoutlist" component={WorkoutList} />
>>>>>>> 93f705d6c608aa658994ac4800c40e9d21bf89d2
    </div>
  );
}

export default App;
